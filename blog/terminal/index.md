---
title: 开发利器之命令行
authors: lencx
tags: [Terminal, Tools, Command]
---

> 高效使用命令行是程序员必备的技能

以下资源均被收录在 [lencx/awesome（关于各种有趣主题的精彩列表）](https://github.com/lencx/awesome)，包含 weekly，rust, webAssembly，js，css，tools 等不同主题。

## zsh

[Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) - Oh My zsh 是一个开源的、社区驱动的框架，用于管理您的 zsh 配置。

- [antigen](https:/github.com/zsh-users/antigen) - 是一小组功能，可帮助您轻松管理 shell (zsh) 插件，称为捆绑包。这个概念与典型的 vim + pathogen 设置中的包几乎相同。 Antigen 之于 zsh，Vundle 之于 vim。
- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - zsh 的类似 [Fish](http://fishshell.com) 的快速/不显眼的自动建议。它根据历史记录和完成建议您键入的命令。
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) - 类似 [Fish shell](https://fishshell.com) 的语法高亮显示。
- [history-substring-search](https://github.com/zsh-users/zsh-history-substring-search) - 历史搜索功能，您可以在其中键入历史中任何命令的任何部分，然后按选择的键，例如向上和向下箭头，以循环匹配。
- [spaceship](https://github.com/spaceship-prompt/spaceship-prompt) - 是一个简约、强大且高度可定制的 Zsh 提示符。它结合了方便工作所需的一切，没有不必要的复杂性，就像真正的宇宙飞船一样。
- [starship](https://github.com/starship/starship) - 适用于任何 shell 的最小、极快且可无限定制的提示！是 spaceship 的替代品。

<!-- <img width="400" alt="zsh" src="https://user-images.githubusercontent.com/16164244/159107318-9504503e-78b5-472e-a228-4f966ffca0e1.png"> -->
![zsh](img/zsh.png)

## bat

[bat](https://github.com/sharkdp/bat) - 类似 cat(1)，但带有 git 集成和语法高亮。

<!-- <img alt="bat" width="600" src="https://user-images.githubusercontent.com/16164244/158962385-0469dd73-32e8-49d9-972e-2f7adc658cf6.png" /> -->
![bat](img/bat.png)

## fd

[fd](https://github.com/sharkdp/fd) - 是一种简单快速和用户友好的 `find` 替代方案。

<!-- <img alt="fd" width="600" src="https://user-images.githubusercontent.com/16164244/158962902-75934736-2c2a-4fb8-8545-6cc89c2d8f36.png" /> -->
![fd](img/fd.png)

## git

### gh

[gh](https://cli.github.com) - GitHub CLI 或 gh 是 GitHub 的命令行界面，可在您的终端或脚本中使用。

<!-- <img width="600" alt="gh" src="https://user-images.githubusercontent.com/16164244/159105828-dc530a6b-ac45-499f-a6f5-f397d1f0cec9.png"> -->
![gh](img/gh.png)

### gix

[gix](https://github.com/Byron/gitoxide) - gix 是用于访问 git 存储库的命令行界面 ( CLI )。它是为了优化用户体验而编写的，其性能与规范实现一样好或更好。此外，它以各种小型 `crate` 的形式提供了一个简单且安全的 API ，用于轻松实现自己的工具。

### dura

[dura](https://github.com/tkellogg/dura) - Dura 是一个后台进程，它监视您的 Git 存储库并提交您未提交的更改，而不会影响 HEAD、当前分支或 Git 索引（暂存文件）。如果您遇到异常导致工作内容丢失，进入 dura 分支可以恢复。如果没有 dura，可以在编辑器中使用 `Ctrl-Z` 来恢复状态。2021 年就是这样。计算机崩溃，`Ctrl-Z` 只能独立处理文件。Dura 快照随时更改整个存储库，因此可以恢复到“4 小时前”而不是“按 Ctrl-Z 40 次或其他”。

### delta

[delta](https://github.com/dandavison/delta) - 用于 `git`、`diff` 和 `grep` 输出的语法高亮分页器。

<!-- <img alt="delta" width="600" src="https://user-images.githubusercontent.com/16164244/159035691-ddd1137fc-557f-41f9-ba37-69cd8471db37.png" /> -->
![delta](img/delta.png)

### tig

[tig](https://github.com/jonas/tig) - Git 的文本模式界面。

<!-- <img width="600" alt="tig" src="https://user-images.githubusercontent.com/16164244/159038060-f89e4e2a-15ac-4a17-be89-e9d319ddff5a.png"> -->
![tig](img/tig.png)

### git-journal

[git-journal](https://github.com/saschagrunert/git-journal) - Git 提交消息和变更日志生成框架。
<!-- <img width="600" alt="git-journal" src="https://user-images.githubusercontent.com/16164244/159108372-238fc91f-3e0a-498f-b493-/e51267e8551a.png"> -->
![git-journal](img/git-journal.png)

## ls

### exa

[exa](https://github.com/ogham/exa) - 是 `ls` 的现代替代品。

<!-- <img width="600" alt="exa" src="https://user-images.githubusercontent.com/16164244/159039537-ee912ed5-a4ed-4629-8f7f-736934c78082.png"> -->
![exa](img/exa.png)

### lsd

[lsd](https://github.com/Peltoche/lsd) - 下一代 `ls` 命令。

<!-- <img width="600" alt="lsd" src="https://user-images.githubusercontent.com/16164244/159040000-bbebce70-325a-4dd6-b6b2-761ffd7a3217.png"> -->
![lsd](img/lsd.png)

### nat

[nat](https://github.com/willdoescode/nat) - 具有有用信息和色彩的 `ls` 替代品。

<!-- <img width="600" alt="nat" src="https://user-images.githubusercontent.com/16164244/159040399-0ac93520-1324-425c-9090-0519549ac6ad.png"> -->
![nat](img/nat.png)

## just

[just](https://github.com/casey/just) - 是保存和运行项目的特定命令的简便方法，其语法受 `make` 启发。

<!-- <img width="600" alt="just" src="https://user-images.githubusercontent.com/16164244/159104936-b571ad0b-793b-4e55-96f6-76f91ccee343.png"> -->
![just](img/just.png)

## Asciinema

[asciinema](https://asciinema.org/) - 是一个免费的开源的轻量级、纯文本终端录制方法。以正确的方式记录和分享您的终端会话。

<!-- <img width="600" alt="asciinema" src="https://user-images.githubusercontent.com/16164244/159105310-029ec769-358c-4155-832e-1888d73c773c.png"> -->
![asciinema](img/asciinema.png)

## fff

[fff](https://github.com/dylanaraps/fff) - 用 bash 编写的简单文件管理器。

<!-- <img width="400" alt="fff" src="https://user-images.githubusercontent.com/16164244/159109051-0b04c863-1b44-4245-88de-730dd866c839.png"> -->
![fff](img/fff.png)

## Watchexec

[watchexec](https://github.com/watchexec/watchexec) 是一个简单的独立工具，它监视路径并在检测到修改时运行命令。

<!-- <img width="600" alt="watchexec" src="https://user-images.githubusercontent.com/16164244/159109190-03ac4583-6a4b-4e07-aadb-56e503c425c5.png"> -->
![watchexec](img/watchexec.png)

## Ripgrep

[ripgrep](https://github.com/BurntSushi/ripgrep) - 是一种面向行的搜索工具，它递归地在当前目录中搜索正则表达式模式。默认情况下，ripgrep 将遵守 gitignore 规则并自动跳过隐藏文件/目录和二进制文件。

<!-- <img width="600" alt="ripgrep" src="https://user-images.githubusercontent.com/16164244/159038879-f7427d78-63bb-4e21-9089-ff623013523e.png"> -->
![ripgrep](img/ripgrep.png)

## Hexyl

[hexyl](https://github.com/sharkdp/hexyl) - 是一个简单的终端十六进制查看器。它使用彩色输出来区分不同类别的字节（NULL 字节、可打印的 ASCII 字符、ASCII 空白字符、其他 ASCII 字符和非 ASCII）。

<!-- <img width="600" alt="hexyl" src="https://user-images.githubusercontent.com/16164244/159105397-158a853f-a881-4501-bcb0-2bb46df1ef1c.png"> -->
![hexyl](img/hexyl.png)

## Zellij

[zellij](https://github.com/zellij-org/zellij) - 是一个面向开发人员、面向运维的人员和任何喜欢终端的人的工作区。它的核心是一个终端多路复用器（类似于 [tmux](https://github.com/tmux/tmux) 和 [screen](https://www.gnu.org/software/screen/)），但这仅仅是它的基础设施层。

<!-- <img width="600" alt="zellij" src="https://user-images.githubusercontent.com/16164244/159106402-e7ce3a1b-f710-4908-8fca-f80727472a28.png"> -->
![zellij](img/zellij.png)

## Image

### cavif

[cavif](https://github.com/kornelski/cavif-rs) - AVIF 图像的编码器/转换器，纯 Rust 实现。

```bash
cavif --quality 60 image.png
```

### svgcleaner

[svgcleaner](https://github.com/RazrFalcon/svgcleaner) - 清理 SVG 文件中不必要的数据。

```bash
svgcleaner --indent=2 --paths-coordinates-precision=5 --join-arcto-flags=yes in.svg out.svg
```

## CSV

### xsv

[xsv](https://github.com/BurntSushi/xsv) 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序。

```bash
$ xsv stats worldcitiespop.csv --everything | xsv table
field       type     min            max            min_length  max_length  mean          stddev         median     mode         cardinality
Country     Unicode  ad             zw             2           2                                                   cn           234
City        Unicode   bab el ahmar  Þykkvibaer     1           91                                                  san jose     2351892
AccentCity  Unicode   Bâb el Ahmar  ïn Bou Chella  1           91                                                  San Antonio  2375760
Region      Unicode  00             Z9             0           2                                        13         04           397
Population  Integer  7              31480498       0           8           47719.570634  302885.559204  10779                   28754
Latitude    Float    -54.933333     82.483333      1           12          27.188166     21.952614      32.497222  51.15        1038349
Longitude   Float    -179.983333    180            1           14          37.08886      63.22301       35.28      23.8         1167162
```

### csview

[csview](https://github.com/wfxr/csview) - 带有 [cjk](https://en.wikipedia.org/wiki/CJK_characters)/emoji 支持的 cli 的漂亮 csv 查看器。

<!-- <img width="600" alt="csview" src="https://user-images.githubusercontent.com/16164244/159107596-c9d4b669-c8bb-4931-b594-305d9be3f098.png"> -->
![csview](img/csview.png)

## Tokei

[tokei](https://github.com/XAMPPRocky/tokei) - 是一个显示代码统计信息的程序。 Tokei 将显示文件数、这些文件中的总行数以及按语言分组的代码、注释和空白。

```bash
===============================================================================
 Language            Files        Lines         Code     Comments       Blanks
===============================================================================
 BASH                    4           49           30           10            9
 JSON                    1         1332         1332            0            0
 Shell                   1           49           38            1           10
 TOML                    2           77           64            4            9
-------------------------------------------------------------------------------
 Markdown                5         1355            0         1074          281
 |- JSON                 1           41           41            0            0
 |- Rust                 2           53           42            6            5
 |- Shell                1           22           18            0            4
 (Total)                           1471          101         1080          290
-------------------------------------------------------------------------------
 Rust                   19         3416         2840          116          460
 |- Markdown            12          351            5          295           51
 (Total)                           3767         2845          411          511
===============================================================================
 Total                  32         6745         4410         1506          829
===============================================================================
```

## procs

[procs](https://github.com/dalance/procs) - 是用 Rust 编写的 [ps](https://man7.org/linux/man-pages/man1/ps.1.html) 的替代品。

<!-- <img width="600" alt="procs" src="https://user-images.githubusercontent.com/16164244/159108021-4e44ca8d-c670-407f-a202-624ccb796a3a.png"> -->
![procs](img/procs.png)

## eva

[eva](https://github.com/nerdypepper/eva) - 简单的计算器 REPL，类似于 bc(1)，具有语法高亮和持久历史记录。

<!-- <img width="400" alt="eva" src="https://user-images.githubusercontent.com/16164244/159108579-495af6e2-10db-4c40-ac38-8175bc981b66.png"> -->
![eva](img/eva.png)

## hyperfine

[hyperfine](https://github.com/sharkdp/hyperfine) - 命令行基准测试工具。

<!-- <img width="600" alt="hyperfine" src="https://user-images.githubusercontent.com/16164244/159108647-2fb8e156-1379-4f22-a42f-39d5cf257e98.png"> -->
![hyperfine](img/hyperfine.png)

## ffsend

[ffsend](https://gitlab.com/timvisee/ffsend) - 从命令行轻松安全地共享文件。 一个功能齐全的 Firefox Send 客户端。

<!-- <img width="600" alt="ffsend" src="https://user-images.githubusercontent.com/16164244/159108741-9080210a-869a-40ea-8496-e712659bc4c6.png"> -->
![ffsend](img/ffsend.png)

## alacritty

[alacritty](https://github.com/alacritty/alacritty) - 是一个现代终端仿真器，具有合理的默认值，但允许进行广泛的配置。 通过与其他应用程序集成，而不是重新实现它们的功能，它设法提供了一组灵活的高性能特性。 目前支持的平台包括 BSD、Linux、macOS 和 Windows。

<!-- <img width="600" alt="alacritty" src="https://user-images.githubusercontent.com/16164244/159108102-c45fa0b9-c17f-410e-8c63-df05a231490e.png"> -->
![alacritty](img/alacritty.png)

## Node.js

### nvm

[nvm](https://github.com/nvm-sh/nvm) - 允许您通过命令行快速安装和使用不同版本的 `Node.js`。

<!-- <img width="400" alt="nvm" src="https://user-images.githubusercontent.com/16164244/159101899-27b36d46-a5fe-48ff-8e83-7b11b3c4fde8.png"> -->
![nvm](img/nvm.png)

### fnm

[fnm](https://github.com/Schniz/fnm) - 快速简单的 `Node.js` 版本管理器，基于 Rust 实现。

<!-- <img width="600" alt="fnm" src="https://user-images.githubusercontent.com/16164244/159102102-cc59594d-f810-43fb-b0e3-9ec5eb6fe2f6.png"> -->
![fnm](img/fnm.png)

### volta

[Volta](https://github.com/volta-cli/volta) - 快速无缝地安装和运行任何 JS 工具！ Volta 是用 Rust 构建的，以二进制文件形式发布，跨平台支持（macOS、Windows、Linux）。

<!-- <img width="600" alt="volta" src="https://user-images.githubusercontent.com/16164244/159104526-4936dd10-39ea-4843-8d83-803628b39184.png"> -->
![Volta](img/Volta.png)
