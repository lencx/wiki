---
title: VS Code 常见问题
---

## 插件冲突

1. [Rust](https://marketplace.visualstudio.com/publishers/rust-lang) - The Rust Programming Language
2. [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) - An alternative rust language server to the RLS

同时安装 1，2 两个插件则会报以下错误，关闭 1 插件即可解决。1 插件官方已经放弃维护，2 插件由社区维护（官方推荐插件）。

```bash
You have both the rust-analyzer (matklad.rust-analyzer) and Rust (rust-lang.rust) plugins enabled.
These are known to conflict and cause various functions of both plugins to not work correctly.
You should disable one of them.You have both the rust-analyzer (matklad.rust-analyzer) and
Rust (rust-lang.rust) plugins enabled. These are known to conflict and cause various functions
of both plugins to not work correctly. You should disable one of them.
```

## Couldn’t start client Rust Language Server

vscode 无法找到 `rustup` 可执行文件的路径，可以通过手动配置 `settings.json` 来解决。

```json
"rust-client.rustupPath": "$HOME/.cargo/bin/rustup"
```

---

## 参考资料

- [How do I solve "Couldn't start client Rust Language Server" with the Rust VS Code extension?](https://stackoverflow.com/questions/60816886/how-do-i-solve-couldnt-start-client-rust-language-server-with-the-rust-vs-cod)
