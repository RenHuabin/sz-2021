<template>
    <div class="minePage">
        <Header title="猫眼电影"/>
        <div id="login__content">
            <div class="login_username">
                <input type="text" placeholder="账户名/手机号/Email">
            </div>
            <div class="login_password">
                <input type="password" placeholder="请输入您的密码">
            </div>
            <div class="login_btn">
                <input type="submit" value="登录">
            </div>
            <div class="login_link">
                <p>立即注册</p>
                <p>找回密码</p>
            </div>
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
#login__content{
    position: absolute;
    top: 0;
    bottom: 0;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 100%;
}
#login__content .login_username,#login__content .login_password{
    width: 100%;
    height: .8rem;
    border-bottom: 1px solid #ccc;
}
#login__content input{
    border: 0;
    height: 100%;
    width: 100%;
    font-size: .3rem;
    padding-left: .2rem;
}
#login__content .login_btn{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
}
#login__content .login_btn>input{
    width: 96%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    color: white;
    font-size: .4rem;
}
#login__content .login_link{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    font-size: .3rem;
}
</style>