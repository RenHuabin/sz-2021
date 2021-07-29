export default {
    path:'/city',
    name:'city',
    component:() => import('@components/cityList/CityList.vue'),
    meta:{
        TabBarFlag:false
    }
}