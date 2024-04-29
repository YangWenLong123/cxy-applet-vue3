<!--
 * @Author: along
 * @Description: tabbar
 * @Date: 2023-08-09 23:08:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-29 09:44:10
 * @FilePath: /cxy-applet-vue3/src/components/common/tab-bar/index.vue
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import router from '~/router'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
})

onMounted(() => { })

function change(value) {
  const tabBarRouter = {
    0: '/pages/index/index',
    1: '/pages/user/index',
  }
  router.pushTab(tabBarRouter[value])
}
</script>

<template>
  <u-tabbar
    :value="props.value"
    :fixed="true"
    :border="true"
    :safe-area-inset-bottom="false"
    :placeholder="false"
    class="utabBar"
    @change="change"
  >
    <u-tabbar-item text="首页">
      <template #active-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/home-active.png"
        />
      </template>
      <template #inactive-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/home.png"
        />
      </template>
    </u-tabbar-item>
    <u-tabbar-item text="我的">
      <template #active-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/my-active.png"
        />
      </template>
      <template #inactive-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/my.png"
        />
      </template>
    </u-tabbar-item>
  </u-tabbar>
</template>

<style lang="scss">
  @import "./index.scss";
</style>
