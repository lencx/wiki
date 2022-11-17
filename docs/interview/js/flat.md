---
title: 深层 JSON 数据扁平化
---

### 案例一

有一个嵌套的纯 JSON 数据，结构不定，包含数组和对象。

```json
{
  "a": 1,
  "b": {
    "b1": 2,
    "b2": [3, 4, { "b3": "hello" }]
  },
  "c": [{"c1": 5, "c2": 6} ,7]
}
```

处理后的数据结构：

```json
{
  "a": 1,
  "b.b1": 2,
  "b.b2[0]": 3,
  "b.b2[1]": 4,
  "b.b2[2].b3": "hello",
  "c[0].c1": 5,
  "c[0].c2": 6,
  "c[1]": 7
}
```

<details>
<summary>点击查看解法：</summary>

```js
function flat(data) {
  const flatObj = {};
  const check = (v) => Object.prototype.toString.call(v);

  const handle = (data, path = '') => {
    if (check(data) === "[object Object]") {
      for (let key in data) {
        handle(data[key], path ? `${path}.${key}` : key);
      }
      return;
    }
    if (check(data) === "[object Array]") {
      for (let i = 0; i < data.length; i++) {
        handle(data[i], path ? `${path}[${i}]` : i);
      }
      return;
    }
    flatObj[path] = data;
  };

  handle(data);
  return flatObj;
}
```
</details>
