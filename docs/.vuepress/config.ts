import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LLM-Guide",
  description: "LLM-Guide, For AGI.",

  theme,
});
