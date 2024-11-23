import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite-2/',
  // head: [["link", { rel: "icon", href: '/public/logo.svg'}]],

  title: "uinptr cheat",
  description: "A VitePress Site",
 
  head: [
    [
      "link",
      { rel: "icon", href: "/vite/logo.svg"},
    ]],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: '读写驱动示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opauopa' },

      { icon: {
        svg : '<svg t="1732301106323" class="icon" viewBox="0 0 1071 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6293" width="200" height="200"><path d="M887.365188 952.783894H184.455499C82.758914 952.783894 0 876.72402 0 783.272408V336.111466c0-93.477378 82.758914-169.537251 184.455499-169.537252h704.043373c51.969094 0 101.67082 20.225949 136.377002 55.498973A159.256801 159.256801 0 0 1 1071.846453 336.420652V783.272408c0 93.451613-82.758914 169.511486-184.481265 169.511486zM184.455499 251.600495c-54.829069 0-99.429218 37.901109-99.429218 84.510971V783.272408c0 46.609861 44.600149 84.51097 99.429218 84.51097H887.365188c54.829069 0 99.429218-37.901109 99.429218-84.51097V335.415796a74.539706 74.539706 0 0 0-22.570613-53.72115c-18.808844-19.11803-46.377972-30.09415-75.750687-30.094151z" p-id="6294"></path><path d="M397.794168 495.316736L219.651226 535.923226a36.355177 36.355177 0 0 1-15.175903-71.112889l178.142942-40.55496a35.8141 35.8141 0 0 1 43.131513 27.955611c4.302845 19.169562-8.786049 38.854434-27.95561 43.157279zM674.052285 495.316736c-19.169562-4.302845-32.258456-23.987717-27.955611-43.157279a35.8141 35.8141 0 0 1 43.131514-27.955611l178.142941 40.55496a36.355177 36.355177 0 0 1-15.175902 71.112889l-178.142942-40.554959zM268.811876 1023.999845a56.684187 56.684187 0 0 1-56.684187-56.813015v-42.590437a56.684187 56.684187 0 1 1 113.600264 0v42.590437a56.684187 56.684187 0 0 1-56.684187 56.813015zM803.034577 1023.999845a56.684187 56.684187 0 0 1-56.813015-56.813015v-42.590437a56.684187 56.684187 0 1 1 113.600264 0v42.590437a56.684187 56.684187 0 0 1-56.684187 56.813015z" p-id="6295"></path><path d="M248.918821 42.946487m26.538343-29.671097l0 0q26.538343-29.671097 56.20944-3.132755l185.900469 166.272595q29.671097 26.538343 3.132754 56.20944l0 0q-26.538343 29.671097-56.20944 3.132755l-185.900468-166.272595q-29.671097-26.538343-3.132755-56.20944Z" p-id="6296"></path><path d="M577.629382 262.330313m-26.538343-29.671098l0 0q-26.538343-29.671097 3.132755-56.20944l185.900468-166.272595q29.671097-26.538343 56.209441 3.132755l0 0q26.538343 29.671097-3.132755 56.20944l-185.900468 166.272595q-29.671097 26.538343-56.209441-3.132755Z" p-id="6297"></path><path d="M595.621982 756.373184a39.447041 39.447041 0 0 1-30.738289-14.686357L533.346672 702.677799l-32.438814 38.467951a39.730462 39.730462 0 0 1-55.473207 5.153108l-44.316729-36.535535a23.188986 23.188986 0 1 1 29.501543-35.762569l39.163621 32.258455 33.495202-39.601634a39.6274 39.6274 0 0 1 61.038563 0.566842l32.722236 40.323069 45.424646-33.933215A23.188986 23.188986 0 1 1 669.904033 710.665117l-50.655051 37.798047a39.369745 39.369745 0 0 1-23.627 7.91002z" p-id="6298"></path></svg>'
      }, link: 'https://space.bilibili.com/513123771' }
    ],

    footer: {
  
      copyright: 'Copyright © 2024-present uintptr'
    },
  }
})
