import Row from './src/row';

// 因为我要在main.js 那个入口文件 使用 Vue.use  那么就会自动调用一个 install方法 ，这里需要重写
Row.install = (Vue) => {
  // 全局注册
  Vue.component(Row.name, Row);
};

export default Row;
