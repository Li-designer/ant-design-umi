// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { RunTimeLayoutConfig } from '@umijs/max';
import HeaderContent from './Layout/headerContent';

type GET_INITIAL = Promise<{
  name: string
  role: string
  hasRoutes: Array<string>
}>

/**
 * @description 请求接口初始状态,返回用户信息等
 * @returns {}
 */
export async function getInitialState(): GET_INITIAL {
  return {
    name: 'lj',
    role: 'Admin',
    hasRoutes: ['/access', '/home', '/table'],
  }
}
/* 参考布局设置:https://procomponents.ant.design/components/layout#prolayout */
export const layout: RunTimeLayoutConfig = (initialState)  => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    layout:'mix',
    fixedHeader: true,
    loading:false,// 全局loading设置
    headerContentRender:()=><HeaderContent></HeaderContent>
  }
}

