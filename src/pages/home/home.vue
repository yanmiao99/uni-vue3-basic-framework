<template>
  <view class="home">
    <custom-navbar />

    <button @click="postChangeParams">点击获取post 数据</button>

    <custom-banner v-if="bannerList.length > 0" :list="bannerList" />

    <custom-tabbar type="home" />
  </view>
</template>

<script setup>
import { useThemeStore } from 'store/theme'
import { onMounted, ref } from 'vue'
import { getBannerList, getChangeParams } from 'api/test'

const theme = useThemeStore()

let bannerList = ref([])
onMounted(async () => {
  const res = await getBannerList()
  bannerList.value = res.data
})

const postChangeParams = async () => {
  let res = await getChangeParams()
  console.log(res)
}
</script>
<style scoped lang="scss">
button {
  background: v-bind('theme.action_color_primary');
}
</style>
