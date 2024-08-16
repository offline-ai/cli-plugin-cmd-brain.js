# AI Client Brain Command

> 【English|[中文](./README.cn.md)】
---

管理大脑(LLM大模型)的命令插件 For [Offline AI Client](https://npmjs.org/package/@offline-ai/cli)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/%40offline-ai%2Fcli-plugin-cmd-brain.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-brain)
[![Downloads/week](https://img.shields.io/npm/dw/%40offline-ai%2Fcli-plugin-cmd-brain.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-brain)



<!-- toc -->
* [ai-agent(WIP)](#ai-agentwip)
<!-- tocstop -->

## Quick Start

Before using, you need to first install the [Offline AI Client](https://npmjs.org/package/@offline-ai/cli).

## Install

```bash
#If not already installed, install the client:
npm install -g @offline-ai/cli
#Install the plugin
ai plugin install cmd-brain
```

## Commands

<!-- commands -->
- [AI Client Brain Command](#ai-client-brain-command)
  - [Quick Start](#quick-start)
  - [Install](#install)
  - [Commands](#commands)
  - [`ai agent`](#ai-agent)
  - [`ai autocomplete [SHELL]`](#ai-autocomplete-shell)
  - [`ai brain [NAME]`](#ai-brain-name)
  - [`ai brain dn [NAME]`](#ai-brain-dn-name)
  - [`ai brain down [NAME]`](#ai-brain-down-name)
  - [`ai brain download [NAME]`](#ai-brain-download-name)
  - [`ai brain list [NAME]`](#ai-brain-list-name)
  - [`ai brain refresh`](#ai-brain-refresh)
  - [`ai brain search [NAME]`](#ai-brain-search-name)
  - [`ai config [ITEM_NAME]`](#ai-config-item_name)
  - [`ai config save [DATA]`](#ai-config-save-data)
  - [`ai help [COMMAND]`](#ai-help-command)
  - [`ai plugins`](#ai-plugins)
  - [`ai plugins add PLUGIN`](#ai-plugins-add-plugin)
  - [`ai plugins:inspect PLUGIN...`](#ai-pluginsinspect-plugin)
  - [`ai plugins install PLUGIN`](#ai-plugins-install-plugin)
  - [`ai plugins link PATH`](#ai-plugins-link-path)
  - [`ai plugins remove [PLUGIN]`](#ai-plugins-remove-plugin)
  - [`ai plugins reset`](#ai-plugins-reset)
  - [`ai plugins uninstall [PLUGIN]`](#ai-plugins-uninstall-plugin)
  - [`ai plugins unlink [PLUGIN]`](#ai-plugins-unlink-plugin)
  - [`ai plugins update`](#ai-plugins-update)
  - [`ai run [DATA]`](#ai-run-data)
  - [`ai test`](#ai-test)
  - [`ai version`](#ai-version)

## `ai agent`

🤖 The AI Agent Manager

```
USAGE
  $ ai agent

DESCRIPTION
  🤖 The AI Agent Manager


  Manage your AI Agents 🤖 here.
  📜 List local or online agents
  🔎 search for agents
  📥 download agents
  ❌ delete agents
  🎉 publish agents


EXAMPLES
  $ ai agent list
  $ ai agent download <agent-name>
  $ ai agent publish <agent-name>
```

_See code: [src/commands/agent/index.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/agent/index.ts)_

## `ai autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ ai autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ ai autocomplete

  $ ai autocomplete bash

  $ ai autocomplete zsh

  $ ai autocomplete powershell

  $ ai autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.1.5/src/commands/autocomplete/index.ts)_

## `ai brain [NAME]`

🧠 The AI Agent Brains(LLM) Manager.

```
USAGE
  $ ai brain [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-s
    <value>] [-n <value>] [-u <value> -r] [-v ]

ARGUMENTS
  NAME  the brain name to search

FLAGS
  -b, --brainDir=<value>  the brains(LLM) directory
  -c, --config=<value>    the config file
  -n, --count=<value>     [default: 100] the max number of brains to list, 0 means all.
  -r, --refresh           refresh the online brains list
  -s, --search=<value>    the json filter to search for brains
  -u, --hubUrl=<value>    the hub mirror url
  -v, --verifyQuant       whether verify quant when refresh
      --[no-]banner       show banner

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🧠 The AI Agent Brains(LLM) Manager.


  Manage AI Agent brains 🧠 here.
  📜 List downloaded or online brains
  🔎 search for brains
  📥 download brains
  ❌ delete brains


EXAMPLES
  $ ai brain               # list download brains
  $ ai brain list --online # list online brains
  $ ai brain download <brain-name>
```

_See code: [src/commands/brain/index.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/brain/index.ts)_

## `ai brain dn [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain dn [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
    F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K_M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ
    2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED
    ] [-u <value>] [-d]

ARGUMENTS
  NAME  the brain name to download

FLAGS
  -b, --brainDir=<value>  the brains(LLM) directory
  -c, --config=<value>    the config file
  -d, --dryRun            dry run, do not download
  -q, --quant=<option>    the quantization of the model, defaults to 4bit
                          <options: F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K
                          _M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_
                          M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED>
  -u, --hubUrl=<value>    the hub mirror url
      --[no-]banner       show banner

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🧠 The AI Agent Brains(LLM) Downloader.


  📥 download 🧠 brains to brainDir.


ALIASES
  $ ai brain dn
  $ ai brain down

EXAMPLES
  $ ai brain dn <brain-name> [-q <QUANT>]
```

## `ai brain down [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain down [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
    F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K_M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ
    2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED
    ] [-u <value>] [-d]

ARGUMENTS
  NAME  the brain name to download

FLAGS
  -b, --brainDir=<value>  the brains(LLM) directory
  -c, --config=<value>    the config file
  -d, --dryRun            dry run, do not download
  -q, --quant=<option>    the quantization of the model, defaults to 4bit
                          <options: F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K
                          _M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_
                          M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED>
  -u, --hubUrl=<value>    the hub mirror url
      --[no-]banner       show banner

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🧠 The AI Agent Brains(LLM) Downloader.


  📥 download 🧠 brains to brainDir.


ALIASES
  $ ai brain dn
  $ ai brain down

EXAMPLES
  $ ai brain down <brain-name> [-q <QUANT>]
```

## `ai brain download [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain download [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
    F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K_M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ
    2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED
    ] [-u <value>] [-d]

ARGUMENTS
  NAME  the brain name to download

FLAGS
  -b, --brainDir=<value>  the brains(LLM) directory
  -c, --config=<value>    the config file
  -d, --dryRun            dry run, do not download
  -q, --quant=<option>    the quantization of the model, defaults to 4bit
                          <options: F32|F16|Q4_0|Q4_1|Q4_1_SOME_F16|Q8_0|Q5_0|Q5_1|Q2_K|Q3_K_S|Q3_K_M|Q3_K_L|Q4_K_S|Q4_K
                          _M|Q5_K_S|Q5_K_M|Q6_K|IQ2_XXS|IQ2_XS|Q2_K_S|IQ3_XS|IQ3_XXS|IQ1_S|IQ4_NL|IQ3_S|IQ3_M|IQ2_S|IQ2_
                          M|IQ4_XS|IQ1_M|BF16|Q4_0_4_4|Q4_0_4_8|Q4_0_8_8|GUESSED>
  -u, --hubUrl=<value>    the hub mirror url
      --[no-]banner       show banner

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🧠 The AI Agent Brains(LLM) Downloader.


  📥 download 🧠 brains to brainDir.


ALIASES
  $ ai brain dn
  $ ai brain down

EXAMPLES
  $ ai brain download <brain-name> [-q <QUANT>]
```

_See code: [src/commands/brain/download.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/brain/download.ts)_

## `ai brain list [NAME]`

📜 List downloaded or online brains, defaults to downloaded.

```
USAGE
  $ ai brain list [NAME] [--json] [-c <value>] [--banner] [-d] [-a] [-b
    <value>] [-f] [-s <value>] [-n <value>] [-u <value> -r]

ARGUMENTS
  NAME  the brain name to search

FLAGS
  -a, --all                list all brains(include downloaded and online)
  -b, --brainDir=<value>   the brains(LLM) directory
  -c, --config=<value>     the config file
  -d, --downloaded         list downloaded brains
  -f, --[no-]onlyFeatured  only list featured brains
  -n, --count=<value>      [default: 100] the max number of brains to list, 0 means all.
  -r, --refresh            refresh the online brains list
  -s, --search=<value>     the json filter to search for brains
  -u, --hubUrl=<value>     the hub mirror url
      --[no-]banner        show banner

GLOBAL FLAGS
  --json  Format output as json.

ALIASES
  $ ai brain search
```

_See code: [src/commands/brain/list.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/brain/list.ts)_

## `ai brain refresh`

🔄 refresh online brains.

```
USAGE
  $ ai brain refresh [--json] [-b <value>] [-u <value>] [-v]

FLAGS
  -b, --brainDir=<value>  the brains(LLM) directory
  -u, --hubUrl=<value>    the hub mirror url
  -v, --verifyQuant       whether verify quant when refresh

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🔄 refresh online brains.

  refresh brain index from huggingface.co
```

_See code: [src/commands/brain/refresh.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/brain/refresh.ts)_

## `ai brain search [NAME]`

📜 List downloaded or online brains, defaults to downloaded.

```
USAGE
  $ ai brain search [NAME] [--json] [-c <value>] [--banner] [-d] [-a] [-b
    <value>] [-f] [-s <value>] [-n <value>] [-u <value> -r]

ARGUMENTS
  NAME  the brain name to search

FLAGS
  -a, --all                list all brains(include downloaded and online)
  -b, --brainDir=<value>   the brains(LLM) directory
  -c, --config=<value>     the config file
  -d, --downloaded         list downloaded brains
  -f, --[no-]onlyFeatured  only list featured brains
  -n, --count=<value>      [default: 100] the max number of brains to list, 0 means all.
  -r, --refresh            refresh the online brains list
  -s, --search=<value>     the json filter to search for brains
  -u, --hubUrl=<value>     the hub mirror url
      --[no-]banner        show banner

GLOBAL FLAGS
  --json  Format output as json.

ALIASES
  $ ai brain search
```

## `ai config [ITEM_NAME]`

🛠️  Manage the AI Configuration.

```
USAGE
  $ ai config [ITEM_NAME] [--json] [-c <value>] [--banner]

ARGUMENTS
  ITEM_NAME  the config item name path to get

FLAGS
  -c, --config=<value>  the config file
      --[no-]banner     show banner

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🛠️  Manage the AI Configuration.

  show current configuration if no commands.

EXAMPLES
  # list all configurations
  $ ai config

  # get the brainDir config item
  $ ai config brainDir
  AI Configuration:
  {
    "brainDir": "~/.local/share/ai/brain"
  }
```

_See code: [src/commands/config/index.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/config/index.ts)_

## `ai config save [DATA]`

💾 Save the configuration to file.

```
USAGE
  $ ai config save [DATA] [--json] [-c <value>] [--banner] [-u <value>] [-s
    <value>...] [-l silence|fatal|error|warn|info|debug|trace] [-h <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-a <value>] [-b <value>] [-p <value>...]

ARGUMENTS
  DATA  the json data which will be passed to the ai-agent script

FLAGS
  -a, --arguments=<value>      the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>       the brains(LLM) directory
  -c, --config=<value>         the config file
  -d, --dataFile=<value>       the data file which will be passed to the ai-agent script
  -f, --script=<value>         the ai-agent script file name or id
  -h, --histories=<value>      the chat histories folder to record
  -i, --[no-]interactive       interactive mode
  -k, --backupChat             whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>      the log level
                               <options: silence|fatal|error|warn|info|debug|trace>
  -m, --[no-]stream            stream mode, defaults to true
  -n, --[no-]newChat           whether to start a new chat history, defaults to false in interactive mode, true in
                               non-interactive
  -p, --promptDirs=<value>...  the prompts template directory
  -s, --agentDirs=<value>...   the search paths for ai-agent script file
  -t, --inputs=<value>         the input histories folder for interactive mode to record
  -u, --api=<value>            the api URL
      --[no-]banner            show banner
      --no-chats               disable chat histories, defaults to false
      --no-inputs              disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/config/save.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/config/save.ts)_

## `ai help [COMMAND]`

Display help for ai.

```
USAGE
  $ ai help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ai.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.4/src/commands/help.ts)_

## `ai plugins`

List installed plugins.

```
USAGE
  $ ai plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ai plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/index.ts)_

## `ai plugins add PLUGIN`

Installs a plugin into ai.

```
USAGE
  $ ai plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ai.

  Uses bundled npm executable to install plugins into /home/riceball/.local/share/ai

  Installation of a user-installed plugin will override a core plugin.

  Use the AI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ai plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ai plugins add myplugin

  Install a plugin from a github url.

    $ ai plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ai plugins add someuser/someplugin
```

## `ai plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ai plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ai plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/inspect.ts)_

## `ai plugins install PLUGIN`

Installs a plugin into ai.

```
USAGE
  $ ai plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ai.

  Uses bundled npm executable to install plugins into /home/riceball/.local/share/ai

  Installation of a user-installed plugin will override a core plugin.

  Use the AI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ai plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ai plugins install myplugin

  Install a plugin from a github url.

    $ ai plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ai plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/install.ts)_

## `ai plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ ai plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ai plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/link.ts)_

## `ai plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai plugins unlink
  $ ai plugins remove

EXAMPLES
  $ ai plugins remove myplugin
```

## `ai plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ai plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/reset.ts)_

## `ai plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai plugins unlink
  $ ai plugins remove

EXAMPLES
  $ ai plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/uninstall.ts)_

## `ai plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai plugins unlink
  $ ai plugins remove

EXAMPLES
  $ ai plugins unlink myplugin
```

## `ai plugins update`

Update installed plugins.

```
USAGE
  $ ai plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/update.ts)_

## `ai run [DATA]`

💻 Run ai-agent script file.

```
USAGE
  $ ai run [DATA] [--json] [-c <value>] [--banner] [-u <value>] [-s
    <value>...] [-l silence|fatal|error|warn|info|debug|trace] [-h <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-a <value>] [-b <value>] [-p <value>...] [--consoleClear]

ARGUMENTS
  DATA  the json data which will be passed to the ai-agent script

FLAGS
  -a, --arguments=<value>      the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>       the brains(LLM) directory
  -c, --config=<value>         the config file
  -d, --dataFile=<value>       the data file which will be passed to the ai-agent script
  -f, --script=<value>         the ai-agent script file name or id
  -h, --histories=<value>      the chat histories folder to record
  -i, --[no-]interactive       interactive mode
  -k, --backupChat             whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>      the log level
                               <options: silence|fatal|error|warn|info|debug|trace>
  -m, --[no-]stream            stream mode, defaults to true
  -n, --[no-]newChat           whether to start a new chat history, defaults to false in interactive mode, true in
                               non-interactive
  -p, --promptDirs=<value>...  the prompts template directory
  -s, --agentDirs=<value>...   the search paths for ai-agent script file
  -t, --inputs=<value>         the input histories folder for interactive mode to record
  -u, --api=<value>            the api URL
      --[no-]banner            show banner
      --[no-]consoleClear      Whether console clear after stream output, default to true in interactive, false to
                               non-interactive
      --no-chats               disable chat histories, defaults to false
      --no-inputs              disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  💻 Run ai-agent script file.

  Execute ai-agent script file and return result. with `-i` to interactive.

EXAMPLES
  $ ai run -f ./script.yaml "{content: 'hello world'}" -l info
  ┌────────────────────
  │[info]:Start Script: ...
```

_See code: [src/commands/run/index.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/run/index.ts)_

## `ai test`

🔬 Run simple ai-agent fixtures to test(draft).

```
USAGE
  $ ai test [--json] [-c <value>] [--banner] [-u <value>] [-s
    <value>...] [-l silence|fatal|error|warn|info|debug|trace] [-h <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-a <value>] [-b <value>] [-p <value>...] [--consoleClear]

FLAGS
  -a, --arguments=<value>      the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>       the brains(LLM) directory
  -c, --config=<value>         the config file
  -d, --dataFile=<value>       the data file which will be passed to the ai-agent script
  -f, --script=<value>         the ai-agent fixture file path
  -h, --histories=<value>      the chat histories folder to record
  -i, --[no-]interactive       interactive mode
  -k, --backupChat             whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>      the log level
                               <options: silence|fatal|error|warn|info|debug|trace>
  -m, --stream                 stream mode, defaults to false
  -n, --[no-]newChat           whether to start a new chat history, defaults to false in interactive mode, true in
                               non-interactive
  -p, --promptDirs=<value>...  the prompts template directory
  -s, --agentDirs=<value>...   the search paths for ai-agent script file
  -t, --inputs=<value>         the input histories folder for interactive mode to record
  -u, --api=<value>            the api URL
      --[no-]banner            show banner
      --[no-]consoleClear      Whether console clear after stream output, default to true in interactive, false to
                               non-interactive
      --no-chats               disable chat histories, defaults to false
      --no-inputs              disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🔬 Run simple ai-agent fixtures to test(draft).

  Execute fixtures file to test ai-agent script file and check result.

EXAMPLES
  $ ai test -f ./fixture.yaml -l info
```

_See code: [src/commands/test/index.ts](https://github.com/offline-ai/cli/blob/v0.1.3/src/commands/test/index.ts)_

## `ai version`

```
USAGE
  $ ai version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.2.5/src/commands/version.ts)_
<!-- commandsstop -->
