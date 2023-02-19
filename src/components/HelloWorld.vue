<template>
  <div>
    你好呀{{name}}，今年{{age}}了吧
  <br/>
  我是你的两倍，我{{doubleAge}}
  <img :src="dogPic" alt="">
  </div>
  <button @click="emp.addAge">新增</button>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {getDogPic} from '@/api/user'
import { storeToRefs } from 'pinia'
import useStore from '../store'

const { emp } = useStore()

const { name, age, doubleAge} = storeToRefs(emp)
const dogPic = ref('https://images.dog.ceo/breeds/samoyed/n02111889_16676.jpg')


onMounted(()=>{
  getDogPic()
    .then(res=>{
      console.log(res);
      dogPic.value = res.data.message
    })
})

</script>

<style lang="scss" scoped></style>