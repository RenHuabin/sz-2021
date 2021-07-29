<template>
    <div id="header">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'猫眼电影'
        }
    }
}
</script>

<style scoped>
#header{
    width: 100%;
    height: 1rem;
    background: #e54847;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
#header>h1{
    font-size: .32rem;
    font-style: normal;
    color: #fff;
}
</style>