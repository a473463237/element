export default {
  name: 'ElCol',
  props: {
    // 自定义标签
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    //   根据 我们 row组件上面传递的 gutter的不同 来 计算属性的不同处理,这里主要是得到那个 gutter的间隔值
    gutter() {
      let parent = this.$parent;
      //   直到找玩所有的父级
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    // 利用 gutter 来完成 给col组件的 paddin给赋值
    style() {
      const style = {};

      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }

      return style;
    },

    classList() {
      const classList = [];

      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          //  this[prop]  相当于 this.span  拿到的是 props里面接收到的值
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          // {
          //   span: 6,
          //   offset: 8,
          //   push: 7,
          //   pull: 9
          // }
          // el-col-xs-6
          // el-col-xs-offset-8
          // el-col-xs-push-7
          // el-col-xs-pull-9

          // 存下 上述对象
          const props = this[size];

          //   这里拿到的是 对象里面的所有的 key值数组
          Object.keys(props).forEach((prop) => {
            //   el-col-xs-6
            // el-col-xs-offset-6
            classList.push(
              prop === 'span'
                ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
          });
        }
      });
      return classList;
    },
  },
  render(createElement) {
    //   标签名(必需), 与模板中属性对应的数据对象(可选), 子级虚拟节点(可选)
    return createElement(this.tag, {
      class: [
        'el-col',
        this.classList,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
