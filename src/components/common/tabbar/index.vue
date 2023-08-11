<!--
 * @Author: along
 * @Description:1
 * @Date: 2023-08-09 23:08:19
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:34:55
 * @FilePath: /cxy-applet-vue3/src/components/common/tab-bar/index.vue
-->
<script setup>
import { onMounted } from 'vue'
import router from '~/router'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
})

// const state = reactive({})

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
          src="@/static/images/shouye1.png"
        />
      </template>
      <template #inactive-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/shouye.png"
        />
      </template>
    </u-tabbar-item>
    <u-tabbar-item text="我的">
      <template #active-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/gerenzhongxin1.png"
        />
      </template>
      <template #inactive-icon>
        <image
          :style="{ width: '64rpx', height: '64rpx' }"
          src="@/static/images/gerenzhongxin.png"
        />
      </template>
    </u-tabbar-item>
  </u-tabbar>
</template>

<style lang="scss">
  // @import "./index.scss";
</style>
