import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '妙记',
  description: '妙记使用手册',
  theme: defaultTheme({
    locales: {
      '/' : {
        lang: 'zh-CN',
        title: '妙记',
        description: '妙记使用手册',
      }
    },
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    logo: '/img/logo_circle.png',
    repo: 'ztkuaikuai/MiaoJi_Docs'
  })
})