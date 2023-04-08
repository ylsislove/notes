import { defineUserConfig, defaultTheme } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/notes/",
  lang: "zh-CN",
  title: "学无止境",
  description: "阿宇的学习笔记",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "./img/logo.png" }],
    ["meta", { name: "keywords", content: "基础汉英类义词典,全栈学习笔记" }],
  ],
  theme: defaultTheme({
    logo: "/img/logo.png",
    // 默认主题配置
    navbar: navbar,
    sidebar: sidebar,
  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
