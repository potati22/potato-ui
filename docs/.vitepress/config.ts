import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [{ text: "Button", link: "/components/button/" }],
    },
  ],
};
const config = {
  title: "🎈 Potato-UI",
  description: "第一个组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
