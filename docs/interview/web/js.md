---
title: JavaScript 基础
---

## 数据类型

- 基本数据类型：`undefined`、`null`、`boolean`、`number`、`string` 和 `symbol`（es6 新增）。
- 引用数据类型：`object`、`array` 和 `function`（统称为 object）。

### 数据类型检测

#### typeof

除了 `null` 之外的基本数据类型都可以显示正确的类型。对于对象来说，除函数外都会显示 object。

```js
// 基本数据类型
typeof 2 // ✅ 'number'
typeof '2' // ✅ 'string'
typeof true // ✅ 'boolean'
typeof undefined // ✅ 'undefined'
typeof Symbol() // ✅ 'symbol'
typeof null // ❌ 'object'

// 引用数据类型
typeof function(){} // ✅ 'function'
typeof {} // ✅ 'object'
typeof [] // ❌ 'object'
```
