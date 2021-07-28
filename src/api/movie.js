import {http } from '@utils/http'
//接口的管理

//正在热映
export const moviePaying = () => http('get','/api/movieOnInfoList',{cityId:10})

//即将上映
export const movieComing = () => http('get','/api/movieComingList',{cityId:10})

//电影详情
export const movieDetails = () => http('get','/api/detailmovie',{movieId:345808})

//影院
export const movieCinema = () => http('get','/api/cinemaList',{cityId:10})

//搜索
export const movieSearch = () => http('get','/api/searchList',{cityId:10,kw:'a'})