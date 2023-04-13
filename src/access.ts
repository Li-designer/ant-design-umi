export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  const { role, hasRoutes = [] } = initialState
  const accessRouteFilter = (route: { path: any }) =>
    hasRoutes.includes(route.path)
  const isAccessRole = (userRole: string): boolean => role === userRole
  return {
    accessRouteFilter,
    isAccessRole,
  }
}
