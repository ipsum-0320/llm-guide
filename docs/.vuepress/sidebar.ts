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
      text: "RAG 技术",
      icon: "wand-magic-sparkles",
      prefix: "rag/",  // 添加二级前缀
      collapsible: true,  // 使二级可折叠
      children: [
        {
          text: "RAG 基础",
          icon: "book",
          link: "rag.md",
          activeMatch: "/guide/rag/$"
        },
        {
          text: "高级技巧",
          icon: "star",
          prefix: "advanced/",  // 添加三级前缀
          collapsible: true,
          children: [
            {
              text: "性能优化",
              icon: "gauge-high",
              link: "advanced/optimization.md"
            },
            {
              text: "扩展应用",
              icon: "puzzle-piece",
              link: "advanced/extensions.md"
            }
          ]
        }
      ]
    },
    {
      text: "其他技术",
      icon: "ellipsis",
      collapsible: true,
      children: [
        {
          text: "向量数据库",
          icon: "database",
          link: "vector-db.md"
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