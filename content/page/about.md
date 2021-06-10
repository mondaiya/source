---
title: "About"
date: 2020-07-06T20:25:49+08:00
draft: false
math: true
menu: 
    main:
        name: About
        pre: user
        weight: -90
---
# 關於本人

Satanya，Rustacan與Gopher，無知且無能，自負還自滿。

### 技術棧
`🦀Rust` `🦫Go` `☕Java` `{{< ti "brand-kotlin" >}}Kotlin` `🌕Lua`  
`{{< ti "brand-html5" >}}HTML` `{{< ti "brand-css3" >}}CSS` `{{< ti "brand-javascript" >}}JavaScript` `TypeScript` `⚛️React.js`  
`SQL` `🥭MongoDB` `🧱Redis`  
`📟STM32 HAL` `Siemens PLC` `LaTeX` `{{< ti "brand-google" >}}gRPC` `{{< ti "brand-facebook" >}}GraphQL`  
`{{< ti "atom" >}}Electron` `{{< ti "git-merge" >}}git` `🪶Maven` `🐘Gradle`

### ~~信仰~~ 环境
`🚪ArchLinux` `AwesomeWM` `♾️Visual Studio Code` `JetBrains`

# 關於本站
問題屋係數位化習題集，左列所有功能完全基於 {{< ti "brand-github" >}}Github 部署, 不使用任何第三方伺服器与資料庫.

- blog 程式 [Hugo](https://gohugo.io/)
- 持續整合 [Github Actions](https://github.com/features/actions)
- 靜態頁面 [Github Pages](https://pages.github.com/)
- 留言 [utterances 🔮](https://utteranc.es/)

## 格式

本站使用十分高效的 [$\KaTeX$](https://katex.org/) 作爲 $\LaTeX$ 公式渲染器.
中文排版基本按照[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)的規範進行.

## 留言

在每個有內容的頁面底部，您可以登入 {{< ti "brand-github" >}}Github 賬戶以發佈留言，留言支援 {{< ti "markdown">}}Markdown 語法.

## ~~提交問題~~
> #### ⚠️ 注意：
> 
> 本站已轉爲個人 blog ，且不再支援投稿

你可以通過 {{< ti "brand-github" >}}Github 的 Pull requests 功能提交新問題.

Pull requests 允許你提交在原作上的改動，例如增加一個文件. 提交問題的序列圖如下：

{{< mermaid >}}
sequenceDiagram
participant Pages
autonumber
Source->>Fork: Fork
Fork->>You: Clone
activate You
Note right of You: Edit <br> Save <br> Commit
You->>Fork: Push
deactivate You
Fork->>Source: Pull requests
Source -->> Editors: Notify
activate Editors

Note right of Editors: Check

alt not so good
    Editors->>Source: Close
else well
    Editors->>Source: Merge
    Source ->> Pages: CI
end

deactivate Editors
{{< /mermaid >}}

### 1. Fork

你需要從 https://github.com/mondaiya/source 中 {{< ti "git-fork" >}}fork 一份「副本」至你自己的 {{< ti "brand-github" >}}Github 項目中.

### 2. Clone

將你 {{< ti "git-fork" >}}fork 的文件**遞迴地** clone 至本地，請注意，你需要 clone 的是剛剛 {{< ti "git-fork" >}}fork 至你自己 {{< ti "brand-github" >}}Github 賬戶中的項目，而非
https://github.com/mondaiya/source.

```bash
$ git clone --recursive https://github.com/<your github id>/source
```

其中 `--recursive` 表示遞迴（遞歸），如果在 {{< ti "git-fork" >}}fork 之前你的賬戶已經存在名爲 `source` 的項目，則因項目重名 {{< ti "brand-github" >}}Github 會重命名
source 項目，請注意.

至此你還需要的工具是 [Hugo](https://gohugo.io/) 和一個 {{< ti "markdown">}}Markdown 編輯器(推薦使用 VS
Code)，其安裝過程可於網路搜尋，於此不再贅述.

### 進入項目目錄

```bash
$ cd source
```

### 新建問題頁面

```bash
$ hugo new posts/<問題編號>-<github id>.md
```

其中 `<問題編號>` 請根據問題學科按照慣例向後編號，`<github id>` 填寫你的 Github id.

### 編輯

依照 {{< ti "markdown">}}Markdown 同 $\LaTeX$ 語法編輯題目你的解答. 寫完保存.

### 預覽

```bash
$ hugo server -D
```

後在瀏覽器訪問 [http://localhost:1313/posts/](http://localhost:1313/posts/) 以預覽

### Commit

```bash
$ git commit -am "add posts/<問題編號>-<github id>.md"
```

### 3. Push

```bash
$ git push
```

### 4. Pull request

點擊你個人賬戶內 {{< ti "git-fork" >}}fork 的項目頁面中的 {{< ti "git-pull-request" >}}Pull request 連結. 填寫改動信息，如 `增加了某個頁面`.

### 5. Check

之後，修纂組將收到您的申請，將您的 {{< ti "git-pull-request" >}}pull request 驗訖後，修纂組會決定是否 {{< ti "git-merge" >}}Merge 入 Source 主分支中.
如果拒絕收錄，則說明你的編輯可能存在格式、題目重複、問題錯解等方面的問題. 您將受到相關的通知. 如果成功 {{< ti "git-merge" >}}Merge，您就可以在
http://mondaiya.github.io/ 內看到您的提交.
