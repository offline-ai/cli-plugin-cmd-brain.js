import { Args, Flags } from '@oclif/core'
import { parseJsJson } from '@isdk/ai-tool'
import { showBanner, AICommand } from '@offline-ai/cli-common'
import { listBrains, printBrains, upgradeBrains, verifyBrains } from '../../../lib/brain.js'

export default class Brain extends AICommand {
  static args = {
    name: Args.string({
      description: 'the brain name to search',
    })
  }

  static flags = {
    ...AICommand.flags,
    brainDir: Flags.directory({char: 'b', description: 'the brains(LLM) directory', exists: true}),
    search: Flags.string({
      char: 's',
      description: 'the json filter to search for brains',
      parse: (input: string) => parseJsJson(input),
    }),
    count: Flags.integer({
      char: 'n',
      description: 'the max number of brains to list, 0 means all.',
      default: 100,
    }),
    refresh: Flags.boolean({
      char: 'r',
      description: 'refresh the online brains list',
    }),
    hubUrl: Flags.string({
      char: 'u',
      aliases: ['hub-url'],
      description: 'the hub mirror url',
      dependsOn: ['refresh'],
    }),
    verifyQuant: Flags.boolean({
      char: 'v',
      aliases: ['verify-quant'],
      description: 'whether verify quant when refresh',
      dependsOn: ['refresh'],
    }),
  }

  static summary = '🧠 The AI Brains(LLM) Manager.'

  static description = `
  Manage AI brains 🧠 here.
  📜 List downloaded or online brains
  🔎 search for brains
  📥 download brains
  ❌ delete brains
`

  static examples = [`
<%= config.bin %> <%= command.id %>               # list download brains
<%= config.bin %> <%= command.id %> list --online # list online brains
<%= config.bin %> <%= command.id %> download <brain-name>
`,
  ]

  async run(): Promise<any> {
    const opts = await this.parse(Brain)
    const isJson = this.jsonEnabled()
    const {args, flags} = opts
    const userConfig = await this.loadConfig(flags.config, opts)

    if (flags.refresh) {
      const count = await upgradeBrains(flags)
      this.log(`${count} brains updated`)
      return count
    }

    if (userConfig.banner && !isJson) {showBanner('Brain')}
    flags.name = args.name
    flags.downloaded = true
    const result = await listBrains(userConfig, flags)
    if (result) { await verifyBrains(result) }
    if (!isJson) {
      if (!result || result.length === 0) {
        this.log('No downloaded brains found')
      } else {
        printBrains(result, flags as any)
      }
    }
    return result
  }
}
