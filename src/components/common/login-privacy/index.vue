<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-09 23:38:23
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:30:08
 * @FilePath: /cxy-applet-vue3/src/components/common/login-privacy/index.vue
-->
<script setup>
import { storeToRefs } from 'pinia'
import { appLogin } from '@/utils/login'
import { appLoginStore } from '@/store/login'

const store = appLoginStore()
const { login } = storeToRefs(store)

const state = reactive({
  checked: false,
  isShow: false,
  login,
})

function onCheckBox() {
  state.checked = !state.checked
}

function getPhone(e) {
  console.log('store', state.login)
  appLogin(e)
}

function show() {
  state.isShow = true
}

defineExpose({ show })
</script>

<template>
  <!-- 需要自定义tarbar和nava -->
  <view v-if="state.isShow" class="mask">
    <view class="popup-style">
      <u-checkbox
        :checked="state.checked"
        label="我同意"
        @change="onCheckBox"
      />
      <view class="uButton">
        <u-button
          type="primary"
          :class="{ active: state.checked }"
          open-type="getPhoneNumber"
          :custom-style="{
            backgroundColor: state.checked ? '#000' : 'blue',
            borderRadius: '30rpx',
          }"
          @getphonenumber="getPhone"
        >
          同意授权手机号
        </u-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .mask {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    .popup-style {
      width: 500rpx;
      height: 400rpx;
      background-color: #fff;
      border-radius: 20rpx;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 20rpx 36rpx;
      .uButton {
        margin-top: 32rpx;
      }
    }
  }
</style>
