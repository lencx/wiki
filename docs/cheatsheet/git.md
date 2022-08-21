---
title: Git 备忘单
---

> [Git](https://git-scm.com/) 是一个免费和开源的分布式版本控制系统，旨在以速度和效率处理从小型到大型项目的所有内容。此备忘单包含最重要和最常用的 Git 命令，以便于参考。

## 应用程序

- [GUI Clients](https://git-scm.com/downloads) - Git 带有内置的 GUI 工具（git-gui、gitk），在特定平台一些第三方工具可提供用户更好的体验。
- [GitHub Desktop](https://desktop.github.com/) - 专注于重要的事情，而不是与 Git 斗争。无论你是 Git 新手还是经验丰富的用户，GitHub Desktop 都能简化你的开发工作流程。

## 类型

## 设置

> 配置全局（跨所有本地存储库）用户信息

```bash
# 设置用户名
git config --global user.name "your_name"

# 设置邮箱
git config --global user.email "your_email"
```

## 初始化（INIT）

```bash
# 将现有目录初始化为 Git 存储库
git init

# 通过 URL 从托管位置检索整个存储库
git clone [url]
```

## 状态（STAGE） & 快照（SNAPSHOT）

```bash
# 在工作目录中显示修改后的文件，为你的下一次提交暂存
git status

# 将现在看起来的文件添加到您的下一次提交（stage）
git add [file]
```
