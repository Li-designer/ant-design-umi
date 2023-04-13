import RightContent from '@/Layout/headerContent'
import { defineConfig } from '@umijs/max'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    // loading:true,
  },
  hash: true,
  history: { type: 'hash' },
  /* 自带icon 参考:https://icones.js.org/ */
  icons: { autoInstall: {} },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      icon: 'HomeTwoTone',
      path: '/home',
      component: './Home',
      access: 'accessRouteFilter',
    },
    {
      name: '权限演示',
      icon: 'SettingTwoTone',
      path: '/access',
      component: './Access',
      access: 'accessRouteFilter',
    },
    {
      name: ' CRUD 示例',
      icon: 'FileAddTwoTone',
      path: '/table',
      component: './Table',
      access: 'accessRouteFilter',
    },
  ],
  alias: {},
  npmClient: 'pnpm',
  dva: {},
})
