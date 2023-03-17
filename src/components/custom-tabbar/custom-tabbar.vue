<template>
  <view class="tab-bar">
    <view
      class="tab-list"
      v-for="item in tabBarList"
      :key="item.text"
      @click="selectTabBar(item.pagePath)"
    >
      <view
        class="img"
        :style="
          transformURL(
            type === item.type ? item.selectedIconPath : item.iconPath
          )
        "
      />
      <view class="text" :class="type === item.type && 'active'">
        {{ item.text }}
      </view>
    </view>
  </view>
</template>

<script setup>
import tabbar from 'config/tabbar'
import { ref } from 'vue'
import { useThemeStore } from 'store/theme'

const theme = useThemeStore()

defineProps({
  type: {
    type: String,
    required: true,
  },
})

tabbar.forEach((item) => {
  for (const themeKey in theme) {
    if (themeKey.match(item.type)) {
      item.selectedIconPath = theme[`tabbar_${item.type}_active`]
      item.iconPath = theme[`tabbar_${item.type}_initial`]
    }
  }
})

const tabBarList = ref(tabbar)

const transformURL = (url) => {
  return `background-image:url(${url})`
}

const selectTabBar = (path) => {
  // 点击可以做权限判断

  uni.reLaunch({
    url: '/' + path,
  })
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding-top: 10rpx;
  padding-bottom: calc(10rpx + env(safe-area-inset-bottom));
  background-color: #ffffff;
  border-top: 1px solid v-bind('theme.border_color');
  box-sizing: border-box;
  display: flex;

  .tab-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    .img {
      width: 40rpx;
      height: 40rpx;
      background-repeat: no-repeat;
      background-size: 40rpx 40rpx;
    }

    .text {
      font-size: 30rpx;
      transform: scale(0.7);
      color: v-bind('theme.tabbar_initial_color');
    }

    .active {
      color: v-bind('theme.tabbar_active_color');
    }
  }
}
</style>
