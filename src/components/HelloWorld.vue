<template>
  <div>
    你好呀{{name}}，今年{{age}}了吧
  <br/>
  我是你的两倍，我{{doubleAge}}
  </div>
  <button @click="emp.addAge">新增</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { emp } = useStore()

const { name, age, doubleAge} = storeToRefs(emp)

</script>

<style lang="scss" scoped></style>