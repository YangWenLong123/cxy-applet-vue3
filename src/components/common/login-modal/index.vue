<!--
 * @Author: zhangxiangxiang
 * @Description:
 * @Date: 2023-08-09 17:29:53
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:40:23
 * @FilePath: /cxy-applet-vue3/src/components/common/login-modal/index.vue
-->
<script setup>
import { ref } from 'vue'
import loginprivacy from '../login-privacy/index.vue'

const mask = ref(null)

// const state = reactive({
// })

function login() {
  mask.value.show()
}
</script>

<template>
  <view class="login-modal">
    <text class="login-text">
      加入会员 尊享权益
    </text>
    <view
      class="login-button"
      @click="login()"
    >
      注册/登录
    </view>
  </view>
  <loginprivacy ref="mask" />
</template>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
