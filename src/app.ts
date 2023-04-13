// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

type GET_INITIAL = Promise<{
  name: string
  role: string
  hasRoutes: Array<string>
}>

/**
 * @description 请求接口初始状态,用户信息等
 * @returns {}
 */
export async function getInitialState(): GET_INITIAL {
  return {
    name: 'lj',
    role: 'Admin',
    hasRoutes: ['/access', '/home', '/table'],
  }
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  }
}
