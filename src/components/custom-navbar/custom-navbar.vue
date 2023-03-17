<template>
  <view class="custom-navbar">
    <view class="status-bar"></view>
    <uni-nav-bar :backgroundColor="bgColor">
      <uni-title type="h2" align="center" :color="textColor" :title="title" />
    </uni-nav-bar>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { isDarkColor } from 'utils/utils'
import { useThemeStore } from 'store/theme'

const theme = useThemeStore()

defineProps({
  title: {
    type: String,
    default: '通用方案',
  },
})

onMounted(() => {
  getStatusBarHeight()

  uni.setNavigationBarColor({
    backgroundColor: isDarkColor(bgColor.value) ? '#000000' : '#ffffff',
  })
  textColor.value = isDarkColor(bgColor.value) ? '#ffffff' : '#000000'
})

const bgColor = ref(theme.navbar_color)
const statusBar = ref(0)
const textColor = ref('')

const getStatusBarHeight = () => {
  uni.getSystemInfo({
    success: (e) => {
      statusBar.value = e.statusBarHeight + 'px'
    },
  })
}
</script>

<style scoped lang="scss">
.custom-navbar {
  .status-bar {
    height: v-bind(statusBar);
    background: v-bind(bgColor);
  }
}
</style>
