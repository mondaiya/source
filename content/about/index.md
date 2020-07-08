---
title: "About"
date: 2020-07-06T20:25:49+08:00
draft: false
---

問題屋係數位化習題集，左列所有功能完全基於 Github 部署, 不使用任何第三方伺服器或資料庫.

 - blog 程式 [Hugo](https://gohugo.io/)
 - 持續整合 [Github Actions](https://github.com/features/actions)
 - 靜態頁面 [Github Pages](https://pages.github.com/)
 - 留言 [utterances 🔮](https://utteranc.es/)

---

# 提交問題

你可以通過 Github 的 Pull requests 功能提交新問題.

> ### ⚠️ 注意：
> 提交問題正如其中文字面意義，是向問題屋提交新問題，而非 Github 的 issues.

Pull requests 允許你提交在原作上的改動，例如`增加一個文件`. 提交問題的序列圖如下：

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
你需要從 https://github.com/mondaiya/source 中 fork 一份「副本」至你自己的 Github 項目中.

### 2. Clone
將你 fork 的文件**遞迴地 clone** 至本地，請注意，你需要 clone 的是剛剛 fork 至你自己 Github 賬戶中的項目，而非 https://github.com/mondaiya/source.

```bash
$ git clone --recursive https://github.com/<your github id>/source
```
其中 --recursive 表示遞迴（遞歸），如果在 fork 之前你的賬戶已經存在名爲 `source` 的項目，則因項目重名 Github 會重命名 source 項目，請注意.  

至此你還需要的工具是 [Hugo](https://gohugo.io/) 和一個 Markdown 編輯器(推薦使用 VS Code)，其安裝過程可於網路搜尋，於此不再贅述.

### 進入項目目錄
```bash
$ cd source
```

### 新建問題頁面
```bash
$ hugo new posts/<問題編號>-<github id>.md
```
其中 `<問題編號>` 請根據問題學科按照慣例向後編號，`<github id>` 填寫你的 Github id.

### 編輯
依照 Markdown 同 $\LaTeX$ 語法編輯題目你的解答. 寫完保存.

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
點擊你個人賬戶內 fork 的項目頁面中的
<svg class="octicon octicon-git-pull-request" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
Pull request 連結. 填寫改動信息，如 `增加了某個頁面`.   

### 5. Check 

之後，修纂組將收到您的申請，將您的 pull request 驗訖後，修纂組會決定是否 Merge (合併)入 Source 主分支中. 如果拒絕收錄，則說明你的編輯可能存在格式、題目重複、問題錯解等方面的問題. 您將受到相關的通知. 如果成功 Merge，您就可以在 http://mondaiya.github.io/ 內看到您的提交.

---

# 留言
在每個有內容的頁面底部，您可以登入 Github 賬戶以發佈留言，留言支援 Markdown 語法.