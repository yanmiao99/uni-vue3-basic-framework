<template>
  <uni-swiper-dot
    @clickItem="dotClickItem"
    :info="bannerList"
    :current="current"
    mode="round"
    :dots-styles="dotsStyles"
    field="content"
  >
    <swiper class="swiper-box" @change="swiperChange" :current="swiperDotIndex">
      <swiper-item
        class="swiper-item"
        v-for="item in bannerList"
        :key="item.id"
      >
        <image
          @click="handleBannerClick(item)"
          mode="aspectFit"
          :src="item.url"
          :alt="item.name"
        />
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useThemeStore } from 'store/theme'

const theme = useThemeStore()

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})

const bannerList = ref([])
const dotsStyles = ref({})

onMounted(() => {
  getBannerList()

  dotsStyles.value = {
    // backgroundColor: 'rgba(0.0.0,0.3)',
    // border: '1px rgba(0, 0, 0, .3) solid',
    selectedBackgroundColor: theme.action_color_primary,
    selectedBorder: `1px ${theme.action_color_primary} solid`,
  }
})

const getBannerList = () => {
  bannerList.value = []
  props.list.forEach((item) => {
    const { id, navigation_img_url, navigation_name, navigation_link } = item
    bannerList.value.push({
      id,
      url: navigation_img_url,
      name: navigation_name,
      link: navigation_link,
    })
  })
}

const swiperDotIndex = ref(0)
const current = ref(0)

const dotClickItem = (e) => {
  swiperDotIndex.value = e
  current.value = e
}

const swiperChange = (e) => {
  current.value = e.detail.current
}

const handleBannerClick = ({ link }) => {
  console.log(link)
}
</script>

<style lang="scss" scoped>
.swiper-box {
  width: 100%;
  height: 200px;

  .swiper-item {
    height: 200px;

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
