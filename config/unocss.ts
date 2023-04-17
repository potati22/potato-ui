import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),

  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default function (): Unocss {
  return Unocss({
    safelist,
    // 加载 Unocss 插件后，Vite 会通过分析 class 的使用状况提供相应的样式定义
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
}
