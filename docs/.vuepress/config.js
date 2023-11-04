import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '妙记',
  description: '妙记使用手册',
  theme: defaultTheme({
     // 默认主题配置
     navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  })
})