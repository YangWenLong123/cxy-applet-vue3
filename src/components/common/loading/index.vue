<script></script>

<script setup lang="ts" name="Loading">
import { useLoadingStore } from '~/store'

const loadingStore = useLoadingStore()
</script>

<template>
  <u-popup :show="loadingStore.loading" :overlay="false" mode="center">
    <u-loading-icon mode="circle" text="正在加载" vertical />
  </u-popup>
</template>

<style lang="scss" scoped>

</style>
