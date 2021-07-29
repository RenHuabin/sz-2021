const path = require('path')

module.exports = {
    devServer:{
        //跨域配置
        proxy:{
            "/apollo":{
                target:'https://i.maoyan.com',
                 secure: false,
                changeOrigin:true
            },
            "/ajax":{
            target:'https://m.maoyan.com',
            secure: false,
            changeOrigin:true
            },
        }
    },
    configureWebpack:{  //覆盖 webpack 的配置项
        resolve:{   //配置别名
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "@api":path.resolve(__dirname,"./src/api"),
                "@components":path.resolve(__dirname,"./src/components"),
                "@utils":path.resolve(__dirname,"./src/utils"),
                "@views":path.resolve(__dirname,"./src/views"),
                "@common":path.resolve(__dirname,"./src/common")
            }
        }
    }
}