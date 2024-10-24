import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";



import { searchProPlugin } from "vuepress-plugin-search-pro";


export default defineUserConfig({
  lang: "es-ES",

  title: "Didcom Devs",
  description: "Bienvenido Dev!",
  smoothScroll: true,
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
   
    navbar: [
      { text: "Inicio", link: "/" },
      { text: "Componentes", link: "/viewComponents/didcom-select.md" }
    ],

   
    sidebar: [
      "/get-started",
      {
        text: "Componentes",
        collapsable: true,
        children: [
          {
            text: "Didcom Select",
            link: "/viewComponents/didcom-select.md",
          },
          {
            text: "Didcom component",
            link: "/viewComponents/secund-component.md",
          },
        ],
      }
     
    ],
    sidebarDepth: 2,
  }),

  plugins: [
    searchProPlugin({
      indexContent: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.tag || [],
          formatter: "Tags: $content",
        },
      ],
    }),
  ],

  bundler: viteBundler(),
});


