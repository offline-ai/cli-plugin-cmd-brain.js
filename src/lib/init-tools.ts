import {
  ResServerTools,
} from '@isdk/ai-tool'

import {LlmModelsFunc } from '@isdk/ai-tool-model'
import type { Hook, Config } from '@oclif/core'

export const BRAINS_FUNC_NAME = 'llm.brains'

let initialized: boolean = false
export async function initTools(this: Hook.Context, userConfig: any, _config: Config) {
  if (initialized) return

  initialized = true
  try {
    if (userConfig.brainDir) {
      const brainsFunc = new LlmModelsFunc(BRAINS_FUNC_NAME, {rootDir: userConfig.brainDir, dbPath: '.brainsdb'})
      ResServerTools.register(brainsFunc)
      // brainsFunc.updateDBFromDir()
    }
  } catch (err) {
    console.error('🚀 ~ initTools brain~ err:', err)
    throw err
  }
}
