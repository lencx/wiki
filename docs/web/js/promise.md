---
title: Promise
---

Promise 代表异步操作的最终结果。与 Promise 交互的主要方式是通过它的 then 方法，该方法注册回调以接收 Promise 的最终值或无法实现 Promise 的原因。

---

## 术语（Terminology）

- **promise** - 是具有 `then` 行为符合本规范的方法的对象或函数
- **thenable** - 是定义 `then` 方法的对象或函数
- **value**  - 是任何合法的 JavaScript 值（包括 `undefined`，`thenable` 或 `promise`）
- **exception** - 是使用 throw 语句抛出的值
- **reason** - 是一个值，表示一个承诺被拒绝的原因

## 要求（Requirements）

Promise 必须处于以下三种状态之一：待处理（pending）、已完成（fulfilled）或已拒绝（rejected）

### Promise 状态（States）

### then 方法

## 参考资料

- [Promises/A+](https://promisesaplus.com/)
