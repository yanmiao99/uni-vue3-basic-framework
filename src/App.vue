<script setup>
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { useThemeStore } from 'store/theme'

const themeStore = useThemeStore()

onLaunch(() => {
  // console.log("App Launch");
  getTheme()
})

let themeData = {
  // 标题栏颜色
  navbar_color: '#222222',

  // 行为相关颜色
  action_color_primary: '#007af0',
  action_color_success: '#4cd964',
  action_color_warning: '#f0ad4e',
  action_color_error: '#dd524d',

  // 边框颜色
  border_color: '#c8c7cc',

  // 文字基本颜色
  text_color: '#333333', // 基本色
  text_color_inverse: '#ffffff', // 反色
  text_color_grey: '#999999', // 辅助灰色，如加载更多的提示信息
  text_color_placeholder: '#808080',
  text_color_disable: '#c0c0c0',

  // 背景颜色
  bg_color: '#ffffff',
  bg_color_grey: '#f8f8f8',
  bg_color_hover: '#f1f1f1', // 点击状态颜色
  bg_color_mask: '#181A1F', // 遮罩颜色

  // 底部选项卡图标
  tabbar_home_initial: 'static/tabbar/home-0.jpg',
  tabbar_home_active: 'static/tabbar/home-1.jpg',
  tabbar_category_initial: 'static/tabbar/category-0.jpg',
  tabbar_category_active: 'static/tabbar/category-1.jpg',
  tabbar_consulting_initial: 'static/tabbar/consulting-0.jpg',
  tabbar_consulting_active: 'static/tabbar/consulting-1.jpg',
  tabbar_my_initial: 'static/tabbar/my-0.jpg',
  tabbar_my_active: 'static/tabbar/my-1.jpg',

  // 底部选项卡选中颜色
  tabbar_initial_color: '#DBDCE4',
  tabbar_active_color: '#CEAE75',
}

const getTheme = () => {
  themeStore.$patch({
    ...themeData,
  })
}

onShow(() => {
  // console.log("App Show");
})
onHide(() => {
  // console.log("App Hide");
})
</script>

<style lang="scss"></style>
