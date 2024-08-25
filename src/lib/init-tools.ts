import { addDays } from "date-fns"
import {
  ResServerTools,
  toDateTime,
  wait,
} from '@isdk/ai-tool'

import {LlmModelsFunc } from '@isdk/ai-tool-model'
import type { Hook, Config } from '@oclif/core'

export const BRAINS_FUNC_NAME = 'llm.brains'

export async function initTools(this: Hook.Context, userConfig: any, _config: Config) {
  try {
    if (userConfig.brainDir) {
      const brainsFunc = new LlmModelsFunc(BRAINS_FUNC_NAME, {rootDir: userConfig.brainDir, dbPath: '.brainsdb'})
      ResServerTools.register(brainsFunc)
      await wait(100)
      let c = 10
      while (brainsFunc.initingData && c > 0) {
        await wait(100)
        c--
      }
      // brainsFunc.updateDBFromDir()
      const latestModel = brainsFunc.getLatestModel()
      if (latestModel) {
        const latestDate = toDateTime(latestModel.updatedAt!)
        if (latestDate && addDays(latestDate, 7) <= new Date()) {
          console.log('💡 Hint: Your Brain index data has not been updated for at least one week. Run `ai brain refresh` to update the index.');
        }
      }
    }
  } catch (err) {
    console.error('🚀 ~ initTools brain~ err:', err)
    throw err
  }
}
