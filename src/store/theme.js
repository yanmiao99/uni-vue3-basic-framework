import { defineStore } from 'pinia'
// 第一个参数是应用程序中 store 的唯一 id
export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      // 标题栏颜色
      navbar_color: '',

      // 行为相关颜色
      action_color_primary: '',
      action_color_success: '',
      action_color_warning: '',
      action_color_error: '',

      // 边框颜色
      border_color: '',

      // 文字基本颜色
      text_color: '', // 基本色
      text_color_inverse: '', // 反色
      text_color_grey: '', // 辅助灰色，如加载更多的提示信息
      text_color_placeholder: '',
      text_color_disable: '',

      // 背景颜色
      bg_color: '',
      bg_color_grey: '',
      bg_color_hover: '', // 点击状态颜色
      bg_color_mask: '', // 遮罩颜色

      // 底部选项卡图标
      tabbar_home_initial: '',
      tabbar_home_active: '',
      tabbar_category_initial: '',
      tabbar_category_active: '',
      tabbar_consulting_initial: '',
      tabbar_consulting_active: '',
      tabbar_my_initial: '',
      tabbar_my_active: '',

      // 底部选项卡颜色
      tabbar_initial_color: '',
      tabbar_active_color: '',
    }
  },
})
