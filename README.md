# AI Client Brain Command

> 【English|[中文](./README.cn.md)】
---

The [Offline AI Client](https://npmjs.org/package/@offline-ai/cli) Command plugin for managing the brain🧠 (LLM large model) files.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/%40offline-ai%2Fcli-plugin-cmd-brain.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-brain)
[![Downloads/week](https://img.shields.io/npm/dw/%40offline-ai%2Fcli-plugin-cmd-brain.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-brain)


<!-- toc -->
* [AI Client Brain Command](#ai-client-brain-command)
* [Quick Start](#quick-start)
* [Install](#install)
* [Commands](#commands)
<!-- tocstop -->

# Quick Start

Before using, you need to first install the [Offline AI Client](https://npmjs.org/package/@offline-ai/cli).

# Install

```bash
#If not already installed, install the client:
npm install -g @offline-ai/cli
```

# Commands

<!-- commands -->
* [`ai brain [NAME]`](#ai-brain-name)
* [`ai brain:dn [NAME]`](#ai-braindn-name)
* [`ai brain:down [NAME]`](#ai-braindown-name)
* [`ai brain:download [NAME]`](#ai-braindownload-name)
* [`ai brain:list [NAME]`](#ai-brainlist-name)
* [`ai brain:refresh`](#ai-brainrefresh)
* [`ai brain:search [NAME]`](#ai-brainsearch-name)

## `ai brain [NAME]`

🧠 The AI Agent Brains(LLM) Manager.

```
USAGE
  $ ai brain [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-s <value>] [-n <value>] [-u <value> -r]
    [-v ]

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

_See code: [src/commands/brain/index.ts](https://github.com/offline-ai/cli-plugin-cmd-brain.js/blob/v0.2.1/src/commands/brain/index.ts)_

## `ai brain:dn [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain:dn [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
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
  $ ai brain:dn
  $ ai brain:down

EXAMPLES
  $ ai brain:dn <brain-name> [-q <QUANT>]
```

## `ai brain:down [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain:down [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
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
  $ ai brain:dn
  $ ai brain:down

EXAMPLES
  $ ai brain:down <brain-name> [-q <QUANT>]
```

## `ai brain:download [NAME]`

🧠 The AI Agent Brains(LLM) Downloader.

```
USAGE
  $ ai brain:download [NAME] [--json] [-c <value>] [--banner] [-b <value>] [-q
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
  $ ai brain:dn
  $ ai brain:down

EXAMPLES
  $ ai brain:download <brain-name> [-q <QUANT>]
```

_See code: [src/commands/brain/download.ts](https://github.com/offline-ai/cli-plugin-cmd-brain.js/blob/v0.2.1/src/commands/brain/download.ts)_

## `ai brain:list [NAME]`

📜 List downloaded or online brains, defaults to downloaded.

```
USAGE
  $ ai brain:list [NAME] [--json] [-c <value>] [--banner] [-d] [-a] [-b <value>] [-f] [-s <value>] [-n <value>]
    [-u <value> -r]

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
  $ ai brain:search
```

_See code: [src/commands/brain/list.ts](https://github.com/offline-ai/cli-plugin-cmd-brain.js/blob/v0.2.1/src/commands/brain/list.ts)_

## `ai brain:refresh`

🔄 refresh online brains.

```
USAGE
  $ ai brain:refresh [--json] [-b <value>] [-u <value>] [-v]

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

_See code: [src/commands/brain/refresh.ts](https://github.com/offline-ai/cli-plugin-cmd-brain.js/blob/v0.2.1/src/commands/brain/refresh.ts)_

## `ai brain:search [NAME]`

📜 List downloaded or online brains, defaults to downloaded.

```
USAGE
  $ ai brain:search [NAME] [--json] [-c <value>] [--banner] [-d] [-a] [-b <value>] [-f] [-s <value>] [-n <value>]
    [-u <value> -r]

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
  $ ai brain:search
```
<!-- commandsstop -->
