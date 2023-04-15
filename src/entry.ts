import { App } from "vue";
import SFCButton from "./button.vue";
import SFCInput from "./input.vue";

// 导出单独组件
export { SFCButton, SFCInput };

// 编写一个插件，实现install方法
export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(SFCInput.name, SFCInput);
  },
};
