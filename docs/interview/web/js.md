---
title: JavaScript 基础
---

## 数据类型

- 基本数据类型（原始值）- 除对象类型（object）以外的其它任何类型定义的不可变的值（值本身无法被改变）
  - **`Null`**
  - **`Undefined`**
  - **布尔 `Boolean`**
  - **字符串 `String`**
  - **符号 `Symbol`**
  - **数字：`Number` 和 `BigInt`**
- 引用数据类型（对象）- 在计算机科学中，对象（object）是指内存中的可以被标识符引用的一块区域
  - **标准对象 `Object`** - 键值对
  - **函数 `Function`** - 是一个附带可被调用功能的常规对象
  - **有序集：数组和类型数组**
    - 数组 `Array` - 是一种使用整数作为键（integer-keyed）属性并与长度（length）属性关联的常规对象
    - 类型数组 `Typed Arrays` - 是 ECMAScript 2015 中新定义的 JavaScript 内建对象，提供了一个基本的二进制数据缓冲区的类数组视图（如 `Int8Array` `Uint8Array` `Int16Array` `Uint16Array` 等）
  - 带键的集合 - 数据结构把对象的引用当作键
    - Maps - 对象键是可枚举的
    - Sets
    - WeakMaps - 对象键是不可枚举的
    - WeakSets
  - 日期 `Date` - JavaScript 内置有 Date 对象
  - 结构化数据 `JSON`
  - 更多请查看 [JS 内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

:::tip 参考链接

- [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

:::

## 数据类型检测

### typeof

除了 `null` 之外的基本数据类型都可以显示正确的类型。对于对象来说，除函数外都会显示 object。

```js
// 基本数据类型
typeof 2 // ✅ 'number'
typeof 42n // ✅ 'bigint'
typeof '2' // ✅ 'string'
typeof (typeof 1) // ✅ 'string' typeof 总是返回一个字符串
typeof true // ✅ 'boolean'
typeof !!(1) // ✅ 'boolean' 两次调用 ! (逻辑非) 操作符相当于 Boolean()
typeof undefined // ✅ 'undefined'
typeof Symbol() // ✅ 'symbol'
// 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。
// 由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。
typeof null // ❌ 'object'

// 引用数据类型
typeof function(){} // ✅ 'function'
typeof {} // ✅ 'object'
typeof [] // ❌ 'object'
typeof (new String('String')) // 'object' 除 Function 外的所有构造函数的类型都是 'object'
typeof /abc/ // ❌ 'object'
```

:::tip 参考链接

- [typeof 操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

:::

### instanceof
