import { 
    moviePaying,
    movieComing,
    // movieDetails,
    // movieCinema,
    movieSearch
} from '@api/movie'

export default {
    //正在热映
    async actionsMoviePaying({commit}){
        let data = await moviePaying()
        console.log(data.movieList)
        commit('mutationsMoviePaying',data.movieList)
    },
    //即将上映
    async actionsmovieComing({commit}){
        let data = await movieComing()
        console.log(data.coming)
        commit('mutationsmovieComing',data.coming)
    },
    //电影搜索
    async actionsmovieSearch({commit},params){
        let data = await movieSearch(params)
        let list = data.movies?data.movies.list:[]
        commit('mutationsmovieSearch',list)
    },
}