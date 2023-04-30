import { App } from "vue";
import PButton from "./button/index.vue";
import "uno.css";

// 导出单独组件
export { PButton };

// 编写一个插件，实现install方法
export default {
  install(app: App): void {
    app.component("PButton", PButton);
  },
};
