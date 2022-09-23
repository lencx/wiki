---
title: 移动端禁止页面缩放
---

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

```css
body {
  touch-action: pan-x pan-y;
}
```

- [How do you disable viewport zooming on Mobile Safari?](https://stackoverflow.com/questions/4389932/how-do-you-disable-viewport-zooming-on-mobile-safari)
- [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) - The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
