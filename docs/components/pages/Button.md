常用的操作按钮。

## 基础用法

基础的按钮用法。


<Button />

_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>


:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>
```

:::

