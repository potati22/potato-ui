<template>
  <div class="mb-5">
    <PButton color="blue">主要按钮</PButton>
    <PButton color="green">绿色按钮</PButton>
    <PButton color="gray">灰色按钮</PButton>
    <PButton color="yellow">黄色按钮</PButton>
    <PButton color="red">红色按钮</PButton>
  </div>
  <div class="mb-5">
    <PButton color="blue" plain>朴素按钮</PButton>
    <PButton color="green" plain>绿色按钮</PButton>
    <PButton color="gray" plain>灰色按钮</PButton>
    <PButton color="yellow" plain>黄色按钮</PButton>
    <PButton color="red" plain>红色按钮</PButton>
  </div>
  <div class="mb-5">
    <PButton size="small" plain>小按钮</PButton>
    <PButton size="medium" plain>中按钮</PButton>
    <PButton size="large" plain>大按钮</PButton>
  </div>
  <div class="mb-5">
    <PButton color="blue" round plain icon="search">搜索按钮</PButton>
    <PButton color="green" round plain icon="edit">编辑按钮</PButton>
    <PButton color="gray" round plain icon="check">成功按钮</PButton>
    <PButton color="yellow" round plain icon="message">提示按钮</PButton>
    <PButton color="red" round plain icon="delete">删除按钮</PButton>
  </div>
</template>

<script setup>
// import { PButton, SFCInput } from "../dist/potato-ui.esm";
import PButton from './button/index.vue'
</script>
