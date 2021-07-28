import { http } from '@utils/http'
//接口管理

//获取城市列表
export const cityList = () => http('get','api/cityList')

//城市定位
export const cityGetLocation = () => http('get','api/getLocation')
