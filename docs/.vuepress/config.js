module.exports = {
  title: "西瓜 UI",
  description: "一个简单实用的 UI 框架",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"],
      },
      {
        title: "所有组件",
        children: ["/components/button"],
      },
    ],
  },
};
