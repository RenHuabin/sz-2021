<template>
    <div class="moviePage">
        <Header title="猫眼电影"/>
        <div id="content">
            <div class="movie_menu">
            <router-link :to="{name:'city'}" tag="div" class="movie_menu_city">
                <span>北京</span>
                <i class="iconfont">&#xe627;</i>
            </router-link>
            <ul class="movie_menu_switch">
                <router-link :to="{name:'movieNow'}" tag="li">正在热映</router-link>
                <router-link :to="{name:'movieComing'}" tag="li">即将上映</router-link>
            </ul>
            <div class="movie_menu_search">
                <router-link :to="{name:'movieSearch'}" tag="i" class="iconfont">&#xe6a8;</router-link>
            </div>
            
        </div>
        <router-view></router-view>
        </div>
        
        
    </div>
</template>

<script>
import Header from '@common/header/Header.vue'

export default {
    components:{
        Header
    }
}
</script>

<style scoped>
#content{
    position: fixed;
    width:100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
#content .movie_menu{
    width: 100%;
    height: .9rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
    border: 1px solid #e6e6e6;
}
#content .movie_menu .movie_menu_city span{
    font-size: .3rem;
}
#content .movie_menu .movie_menu_city i{
    font-size: .3rem;
}
#content .movie_menu .movie_menu_search i{
    font-size: .4rem;
    font-weight: 900;
    color: #e54847;
}
#content .movie_menu .movie_menu_switch{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li{
    height: 100%;
    line-height:.9rem;
    padding: 0 .2rem;
    font-size: .3rem;
}
#content .movie_menu .movie_menu_switch .router-link-active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
/* router-view{
     display: flex;
    overflow-x: hidden;
    overflow-y: auto;
} */
</style>