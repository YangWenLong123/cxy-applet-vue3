<!--
 * @Author: along
 * @Description:我的
 * @Date: 2023-08-09 22:50:31
 * @LastEditors: along
 * @LastEditTime: 2024-04-29 09:36:06
 * @FilePath: /cxy-applet-vue3/src/pages/user/index.vue
-->
<script setup lang="ts">
import { useResetLoading } from '~/hooks'
import tabbar from '@/components/common/tab-bar/index.vue'

const state = reactive({})
useResetLoading()
</script>

<template>
  <view>我的</view>
  <tabbar :value="1" />
</template>

<style scoped lang="scss">

</style>
