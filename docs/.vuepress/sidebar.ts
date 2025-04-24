import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "首页",
      icon: "home",
      link: "/"
    }
  ],
  
  "/guide/": [
    {
      text: "核心指南",
      icon: "lightbulb",
      prefix: "/guide/",
      collapsible: true,
      children: [
        {
          text: "快速入门",
          icon: "rocket",
          link: "README.md",
          activeMatch: "/guide/$"
        },
        {
          text: "RAG 技术",
          icon: "wand-magic-sparkles",
          link: "rag.md",
          activeMatch: "/guide/rag"
        }
      ]
    }
  ],
  
  "/resources/": [
    {
      text: "工具资源",
      icon: "toolbox",
      prefix: "/resources/",
      collapsible: true,
      children: [
        {
          text: "热门网站",
          icon: "rocket",
          link: "README.md",
          activeMatch: "/resources/$"
        },
        {
          text: "高优代码",
          icon: "wand-magic-sparkles",
          link: "code.md",
          activeMatch: "/resources/code"
        }
      ]
    }
  ]
});