import { defineConfig } from "vite";
import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [Unocss()],
});
