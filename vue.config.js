// const path = require('path');

module.exports = {
  // function
  // 对内部的 webpack 配置进行更细粒度的修改  ,新
  // chainWebpack:(config)=>{
  //     config.resolve.alias.set('@element',path.resolve(__dirname,'src/components/element'));
  // },

  // object/function
  // 和webpack 一样的写法 配置 ,最后还会和webpack-merge合并到最终配置中
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
