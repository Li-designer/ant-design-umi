import { defineConfig } from '@umijs/max'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
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
