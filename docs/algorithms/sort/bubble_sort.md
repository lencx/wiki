---
title: 冒泡排序
---

冒泡排序（Bubble Sort）是最简单的排序算法，如果相邻元素的顺序错误，它会重复交换相邻元素。该算法不适用于大型数据集，因为它的平均和最坏情况时间复杂度非常高。

```js
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-i-1; j++) {
      if (arr[j] > arr[j+1]) { // 相邻元素两两对比
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // 元素交换
      }
    }
  }
  return arr;
}
```

:::tip

关于 `len-i-1` 表达式，冒泡排序中的最高（或最低，取决于排序标准）值在第一个循环后到达数组中的最后一个位置，因此无需比较值与其他任何值，因此数组必须一次“缩短”1个单元格，并且外部循环中 i 的值是负责内部循环中的计数器。

:::
