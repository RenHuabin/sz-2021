import {http } from '@utils/http'
//接口的管理

//正在热映
export const moviePaying = () => http('get','/ajax/movieOnInfoList',{token:''})

//即将上映
export const movieComing = () => http('get','/ajax/comingList',{ci:30,token:''})
// export const movieComing = () => http('get','ajax/comingList?ci=30&token')

//电影详情
export const movieDetails = () => http('get','/ajax/detailmovie',{movieId:345808})

//影院
export const movieCinema = () => http('get','/ajax/cinemaList',{cityId:10})

//搜索
export const movieSearch = (val) => http('get','/apollo/ajax/search',{kw:val,cityId:1})