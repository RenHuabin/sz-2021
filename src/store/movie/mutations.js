export default {
    mutationsMoviePaying(state,params){
        state.movieNowList = params
    },
    mutationsmovieComing(state,params){
        state.coming = params
    },
    mutationsmovieSearch(state,params){
        state.movieSearchList = params
    }
}