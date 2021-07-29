export default {
    path:'/movie',
    name:'movie',
    component:()=>import('@views/movie/Movie.vue'),
    meta:{
        TabBarFlag:true
    },
    children:[
        {
            path:'/movie',
            redirect:'/movie/movieNow'
        },
        {
            path:'movieNow',
            name:'movieNow',
            component:() => import('@components/movieNow/MovieNow.vue'),
            meta:{
                TabBarFlag:true
            }
        },
        {
            path:'movieComing',
            name:'movieComing',
            component:() => import('@components/movieComing/MovieComing.vue'),
            meta:{
                TabBarFlag:true
            }
        },
        {
            path:'movieSearch',
            name:'movieSearch',
            component:() => import('@components/movieSearch/MovieSearch.vue'),
            meta:{
                TabBarFlag:false
            }
        }
    ]
}