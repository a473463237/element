import Row from '@element/row';
import Col from '@element/col';


const components = [
  Row,
  Col,
];

// 依次去给每个组件全局注册
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};


export default {
  install,
};

export {
  install,
  Row,
  Col,
};
