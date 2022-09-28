---
title: Node.js 常见问题
---

## error:0308010C:digital envelope routines::unsupported

```bash
node:internal/crypto/hash:67
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:133:10)
```

:::tip 解决方案

### 错误原因

在 Node.js v17 中，Node.js 开发人员关闭了 SSL 提供程序中的一个安全漏洞。此修复是一项重大更改，与 NPM 中 SSL 包中的类似重大更改相对应。当您尝试在 Node.js v17 或更高版本中使用 SSL 而不升​​级 package.json 中的那些 SSL 包时，您将看到此错误。

#### 危险的解决方案

将 Node.js 版本从 17+ 降级到 16+，或者使用旧的 SSL 提供程序。但这两种解决方案都是使您的构建容易受到安全威胁的黑客攻击。

```bash
# Linux and macOS
export NODE_OPTIONS=--openssl-legacy-provider

# Windows
set NODE_OPTIONS=--openssl-legacy-provider

# Windows PowerShell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

#### 正确（安全）的解决方案

使用最新版本的 Node.js，并使用最新的带有安全修复程序的包。以下命令将解决此问题（注意：对于复杂的应用，此命令会引入可能破坏原程序构建的安全修复）：

```bash
npm audit fix --force
```

### 参考资料

- [Error message "error:0308010C:digital envelope routines::unsupported"](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

:::
