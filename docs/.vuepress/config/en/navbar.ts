export const navbar = [
  { text: 'Guide', link: '/en/docs/guide/introduce', icon: 'Compass' },
  {
    text: 'Reference',
    icon: 'Document',
    children: [
      {
        text: 'Configuration',
        children: [
          {
            text: 'Vuepress Config',
            link: 'https://v2.vuepress.vuejs.org/reference/config.html',
          },
          { text: 'Frontmatter', link: '/en/docs/theme/frontmatter-page' },
          { text: 'Theme Configuration', link: '/en/docs/theme/series' },
          {
            text: 'Markdown Extension',
            link: '/en/docs/theme/custom-container',
          },
          { text: 'Other', link: '/en/docs/theme/custom-style' },
        ],
      },
      {
        text: 'Plugins',
        children: [
          { text: 'page', link: '/en/docs/plugins/page' },
          { text: 'comments', link: '/en/docs/plugins/comments' },
          { text: 'vue-previews', link: '/en/docs/plugins/vue-previews' },
          {
            text: 'bulletin-popover',
            link: '/en/docs/plugins/bulletin-popover',
          },
        ],
      },
    ],
  },
  {
    text: 'Version',
    icon: 'SubVolume',
    children: [
      { text: '2.x(alpha)', link: 'http://v2.vuepress-reco.recoluan.com/en/' },
      {
        text: '1.x',
        link: 'https://vuepress-theme-reco.recoluan.com/en/views/1.x/',
      },
    ],
  },
  {
    text: 'Message board',
    link: '/en/docs/message-board',
    icon: 'Chat',
  },
]
