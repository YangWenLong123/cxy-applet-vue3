<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-09 22:50:31
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:33:03
 * @FilePath: /cxy-applet-vue3/src/pages/user/index.vue
-->
<script setup lang="ts">
import { reactive } from 'vue'
import { useResetLoading } from '~/hooks'
import tabbar from '@/components/common/tab-bar/index.vue'

const state = reactive({
  value: 1,
})
useResetLoading()
</script>

<template>
  <view>个人中心</view>
  <tabbar :value="state.value" />
</template>

<style scoped lang="scss">

</style>
