<template>
    <div class="movie_body">
        <div class="movie_item" 
        v-for="(item,index) in coming" :key="index">
            <div class="movie_item_pic">
                <img :src="item.img | toImg('128.180')">
            </div>
            <div class="movie_item_info">
                <h2>{{item.nm}}</h2>
                <p><span>{{item.wish}}</span>人想看</p>
                <p>主演：<span>{{item.star}}</span></p>
                <p><span>{{item.rt}}</span>上映</p>
            </div>
            <div class="movie_item_btn ticket">预售</div>
        </div>
        
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    created(){
        this.actionsmovieComing()
      
    },
    methods:{
        ...Vuex.mapActions({
            actionsmovieComing:'movie/actionsmovieComing'
        })
    },
    computed:{
        ...Vuex.mapState({
            coming:state => state.movie.coming
        })
    }
}
</script>

<style scoped>
.movie_body{

    height: 100%;
    padding-bottom: 1rem;
    padding-left: .2rem;
    padding-right: .2rem;
    overflow-x: hidden;
    /* overflow-y: scroll; */
}
/* .movie_body::-webkit-scrollbar{
    display: none;
} */
.movie_body .movie_item{
    padding: .2rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.movie_body .movie_item .movie_item_pic{
    width: 1.28rem;
    height: 1.8rem;
}
.movie_body .movie_item .movie_item_pic img{
    width: 100%;
    height: 100%;
}
.movie_body .movie_item .movie_item_info{
    margin-left: .2rem;
    flex: 1;
    height: 100%;
}
.movie_body .movie_item .movie_item_info p{
    font-size: .26rem;
    line-height: .45rem;
    color: #666;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .movie_item .movie_item_info p .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: .3rem;
}
.movie_body .movie_item .movie_item_btn{
    width: 1rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    font-size: .26rem;
    cursor: pointer;
}
.movie_body .movie_item .movie_item_info h2{
    font-size: .34rem;
    line-height: .5rem;
    width: 3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .movie_item .ticket{
    background: #3c9fe6;
}
</style>