---
title: apply、bind、call 三者的区别
---

## 三者异同

```bash
+-----------------+-----------------+----------------+
|                 |   函数执行时间    |   this绑定时间  |
+-----------------+-----------------+----------------+
| function object |       未        |       未        |
|        f        |       来        |       来        |
+-----------------+-----------------+----------------+
| function call   |       现        |       现        |
|      f()        |       在        |       在        |
+-----------------+-----------------+----------------+
|    f.call()     |       现        |       现        |
|    f.apply()    |       在        |       在        |
+-----------------+-----------------+----------------+
|    f.bind()     |      未来        |      现在      |
+-----------------+-----------------+----------------+
```

### 相同点

- 都是 `Function` 对象上的方法 ，为了改变函数体内部的 `this` 指向
- 三者第一个参数都是 `this` 要指向的对象，即指定函数调用上下文
- 三者都可以利用后续参数传参

### 不同点

- `bind` 是指定上下文，返回函数，便于稍后调用，`apply` 和 `call` 则是立即调用函数并修改上下文
  - `bind()` 函数会创建一个新的绑定函数 `(bound function，BF)`
  - 返回值：返回一个原函数的拷贝，并拥有指定的 `this` 值和初始参数
- `apply` 传入数组
  - 返回值：调用有指定 `this` 值和参数的函数的结果
- `call` 传入参数列表
  - `call()` 允许为不同的对象分配和调用属于一个对象的函数/方法
  - 可以使用 `call` 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）
  - 返回值：使用调用者提供的 `this` 值和参数调用该函数的返回值。若该方法没有返回值，则返回 `undefined`

## 参考资料

- [[MDN] Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [[MDN] Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [[MDN] Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Javascript call() & apply() vs bind()?](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
