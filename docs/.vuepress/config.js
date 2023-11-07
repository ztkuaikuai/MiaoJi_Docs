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
    // 顶部导航栏配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '用户手册',
        link: '/user-guide/',
      },
      {
        text: '开发手册',
        link: '/dev-guide/',
      },
      {
        text: '更新日志',
        link: 'https://github.com/ztkuaikuai/MiaoJi/blob/dev/CHANGELOG.md',
      }
    ],
    logo: '/img/logo_circle.png',
    // 配置仓库地址
    repo: 'ztkuaikuai/MiaoJi',
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/user-guide/': [
        {
          text: '妙记使用教程',
          children: ['/user-guide/', '/user-guide/bill/', '/user-guide/asset/', '/user-guide/template/', '/user-guide/user/'],
        }
      ],
      '/dev-guide/': [
        {
          children: ['/dev-guide/']
        },
      ],
    },
    // 配置编辑按钮
    editLinkText: '在Github上编辑此页',
    docsRepo: 'https://github.com/ztkuaikuai/MiaoJi_Docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    lastUpdatedText: '上次更新时间',
    contributorsText: '贡献者',
    notFound: ['你是怎么做到的', '恭喜你发现了bug'],
    backToHome: '回到主页'
  })
})