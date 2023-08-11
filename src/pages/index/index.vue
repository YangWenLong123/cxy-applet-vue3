<!--
 * @Author: along
 * @Description:1
 * @Date: 2023-08-09 22:47:20
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 10:24:59
 * @FilePath: /cxy-applet-vue3/src/pages/index/index.vue
-->
<script lang="ts" setup>
// import { reactive } from 'vue'
import loginModal from '@/components/common/login-modal/index.vue'

import tabbar from '@/components/common/tab-bar/index.vue'

const state = reactive({
  value: 0,
})
</script>

<template>
  <div>
    <loginModal ref="loginModal" />
    <tabbar :value="state.value" />
  </div>
</template>

<style lang="scss" scoped>
</style>
