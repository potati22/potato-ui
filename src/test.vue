<template>
  <div class="mb-5">
    <SFCButton color="blue">主要按钮</SFCButton>
    <SFCButton color="green">绿色按钮</SFCButton>
    <SFCButton color="gray">灰色按钮</SFCButton>
    <SFCButton color="yellow">黄色按钮</SFCButton>
    <SFCButton color="red">红色按钮</SFCButton>
  </div>
  <div class="mb-5">
    <SFCButton color="blue" plain>朴素按钮</SFCButton>
    <SFCButton color="green" plain>绿色按钮</SFCButton>
    <SFCButton color="gray" plain>灰色按钮</SFCButton>
    <SFCButton color="yellow" plain>黄色按钮</SFCButton>
    <SFCButton color="red" plain>红色按钮</SFCButton>
  </div>
  <div class="mb-5">
    <SFCButton size="small" plain>小按钮</SFCButton>
    <SFCButton size="medium" plain>中按钮</SFCButton>
    <SFCButton size="large" plain>大按钮</SFCButton>
  </div>
  <div class="mb-5">
    <SFCButton color="blue" round plain icon="search">搜索按钮</SFCButton>
    <SFCButton color="green" round plain icon="edit">编辑按钮</SFCButton>
    <SFCButton color="gray" round plain icon="check">成功按钮</SFCButton>
    <SFCButton color="yellow" round plain icon="message">提示按钮</SFCButton>
    <SFCButton color="red" round plain icon="delete">删除按钮</SFCButton>
  </div>
</template>

<script setup>
// import { SFCButton, SFCInput } from "../dist/potato-ui.esm";
import SFCButton from "./button.vue";
</script>
