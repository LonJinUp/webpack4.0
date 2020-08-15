let path=require('path');

let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    devServer:{//开发服务器配置
        port:'3002',//端口
        progress:true,//进度
        contentBase:'./dist',
        compress:true,//压缩
    },
    mode:'production',//模式 默认两种 production(生产环境) development(开发环境)
    entry:'./src/index.js',//入口文件
    //output 出口文件
    output:{
        filename:'index.[hash:8].js',//打包后文件名
        path:path.resolve(__dirname,'dist')//必须为绝对路径
    },
    plugins:[//数组，里面放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',//指定文件
            filename:'index.html',//输出文件名字
            minify:{
                removeAttributeQuotes:true,//删除双引号
                collapseWhitespace:true,//折叠空行
                
            },
            hash:true//避免缓存
        })
    ]
}