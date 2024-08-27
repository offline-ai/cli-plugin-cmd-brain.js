import { Args, Flags } from '@oclif/core'
import AIBrainListCommand from './list.js'
import { type ParserOutput } from '@oclif/core/interfaces'

export default class AIBrainSearchCommand extends AIBrainListCommand {
  static summary = '🔍 Search brains offline, defaults to all.'

  static args = {
    name: Args.string({
      description: 'the brain name to search',
    })
  }

  static flags = {
    ...AIBrainListCommand.flags,
    all: Flags.boolean({
      char: 'a',
      description: 'list all brains(include downloaded)',
      default: true,
      allowNo: true,
    }),
  }

  async run(opts?: ParserOutput): Promise<any> {
    if (!opts) {opts = await this.parse(AIBrainSearchCommand)}
    return super.run(opts)
  }
}
