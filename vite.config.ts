import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "./config/unocss";

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ["vue"],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), Unocss()],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "PotatoUI",
      fileName: "potato-ui",
      formats: ["esm", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
