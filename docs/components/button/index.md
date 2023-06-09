# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <PButton color="blue">主要按钮</PButton>
    <PButton color="green">绿色按钮</PButton>
    <PButton color="gray">灰色按钮</PButton>
    <PButton color="yellow">黄色按钮</PButton>
    <PButton color="red">红色按钮</PButton>
  </div>
  <div style="margin-bottom:20px;">
    <PButton color="blue" plain>朴素按钮</PButton>
    <PButton color="green" plain>绿色按钮</PButton>
    <PButton color="gray" plain>灰色按钮</PButton>
    <PButton color="yellow" plain>黄色按钮</PButton>
    <PButton color="red" plain>红色按钮</PButton>
  </div>
  <div style="margin-bottom:20px;">
    <PButton size="small" plain>小按钮</PButton>
    <PButton size="medium" plain>中按钮</PButton>
    <PButton size="large" plain>大按钮</PButton>
  </div>
  <div style="margin-bottom:20px;">
    <PButton color="blue" round plain icon="search">搜索按钮</PButton>
    <PButton color="green" round plain icon="edit">编辑按钮</PButton>
    <PButton color="gray" round plain icon="check">成功按钮</PButton>
    <PButton color="yellow" round plain icon="message">提示按钮</PButton>
    <PButton color="red" round plain icon="delete">删除按钮</PButton>
  </div>
  <div>
    <PButton color="blue" round plain icon="search"></PButton>
    <PButton color="green" round plain icon="edit"></PButton>
    <PButton color="gray" round plain icon="check"></PButton>
    <PButton color="yellow" round plain icon="message"></PButton>
    <PButton color="red" round plain icon="delete"></PButton>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="flex flex-row">
    <PButton icon="edit" plain></PButton>
    <PButton icon="delete" plain></PButton>
    <PButton icon="share" plain></PButton>
    <PButton round plain icon="search">搜索</PButton>
  </div>
</template>
```

:::
