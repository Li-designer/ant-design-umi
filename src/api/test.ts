import instance from '@/request/axios'

export const addType = (params: any) => instance.get('/addtype', params) as Promise<any>
