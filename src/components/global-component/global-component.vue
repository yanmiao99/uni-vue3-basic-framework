<template>
  <view class="global-component">
    <!-- todo 全局组件 -->
  </view>
</template>

<script setup>
defineProps({
  page: {
    type: String,
    required: true,
  },
  params: {
    type: Object,
    required: false,
  },
})
</script>

<style lang="scss" scoped></style>
