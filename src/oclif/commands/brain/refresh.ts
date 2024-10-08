import { Flags } from '@oclif/core'
import { showBanner, AICommand } from '@offline-ai/cli-common'
import { upgradeBrains } from '../../../lib/brain.js'

export default class AIBrainRefreshCommand extends AICommand {
  static summary = '🔄 refresh/update online brains index.'

  static description = 'refresh/update brain index from huggingface.co'
  static flags = {
    brainDir: Flags.directory({char: 'b', description: 'the brains(LLM) directory', exists: true}),
    hubUrl: Flags.string({
      char: 'u',
      aliases: ['hub-url'],
      description: 'the hub mirror url',
    }),
    verifyQuant: Flags.boolean({
      char: 'v',
      aliases: ['verify-quant'],
      description: 'whether verify quant when refresh',
    }),
    maxCount: Flags.integer({
      char: 'c',
      description: 'the max number of brains to refresh, -1 means no limits',
      default: -1,
    }),
  }

  async run(): Promise<any> {
    const opts = await this.parse(AIBrainRefreshCommand)
    const isJson = this.jsonEnabled()
    const {flags} = opts
    const userConfig = await this.loadConfig(flags.config, opts)

    if (userConfig.banner && !isJson) {showBanner('Refresh Brains')}

    const count = await upgradeBrains(flags)
    this.log(`${count} brains updated`)

    return count
  }
}
