import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "🏠 首页",
    icon: "home",
    link: "/",
    activeMatch: "^/$"
  },
  {
    text: "📚 核心指南",
    icon: "lightbulb",
    link: "/guide/",
    activeMatch: "^/guide/",
  },
  {
    text: "🛠️ 工具资源",
    icon: "toolbox",
    link: "/resources/",
    activeMatch: "^/resources/"
  },
]);