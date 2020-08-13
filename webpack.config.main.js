let path=require('path');
console.log(path.resolve('dist'))
module.exports={
    mode:'development',//模式 默认两种 production(生产环境) development(开发环境)
    entry:'./src/index.js',//入口文件
    //output 出口文件
    output:{
        filename:'index.js',//打包后文件名
        path:path.resolve(__dirname,'dist')//必须为绝对路径
    }
}