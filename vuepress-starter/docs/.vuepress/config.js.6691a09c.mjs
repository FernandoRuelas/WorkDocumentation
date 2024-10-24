// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import pkg from "@vuepress/plugin-search";
var { searchPlugin } = pkg;
var config_default = defineUserConfig({
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
            link: "/viewComponents/didcom-select.md"
          },
          {
            text: "Didcom component",
            link: "/viewComponents/secund-component.md"
          }
        ]
      }
    ],
    sidebarDepth: 2
  }),
  plugins: [
    searchPlugin({
      hotKeys: ["ctrl+k", "cmd+k"]
    })
  ],
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvRmVybmFuZG9fUm9kcmlndWV6L0RvY3VtZW50cy9wcnVlYmFzL2RvY3VtZW50YXRpb24vdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRmVybmFuZG9fUm9kcmlndWV6XFxcXERvY3VtZW50c1xcXFxwcnVlYmFzXFxcXGRvY3VtZW50YXRpb25cXFxcdnVlcHJlc3Mtc3RhcnRlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0Zlcm5hbmRvX1JvZHJpZ3Vlei9Eb2N1bWVudHMvcHJ1ZWJhcy9kb2N1bWVudGF0aW9uL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIkB2dWVwcmVzcy90aGVtZS1kZWZhdWx0XCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzL2NsaVwiO1xuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiO1xuXG5cbmltcG9ydCBwa2cgZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2gnO1xuY29uc3QgeyBzZWFyY2hQbHVnaW4gfSA9IHBrZztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGxhbmc6IFwiZXMtRVNcIixcblxuICB0aXRsZTogXCJEaWRjb20gRGV2c1wiLFxuICBkZXNjcmlwdGlvbjogXCJCaWVudmVuaWRvIERldiFcIixcbiAgc21vb3RoU2Nyb2xsOiB0cnVlLFxuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcbiAgICBsb2dvOiBcImh0dHBzOi8vdnVlanMucHJlc3MvaW1hZ2VzL2hlcm8ucG5nXCIsXG4gICBcbiAgICBuYXZiYXI6IFtcbiAgICAgIHsgdGV4dDogXCJJbmljaW9cIiwgbGluazogXCIvXCIgfSxcbiAgICAgIHsgdGV4dDogXCJDb21wb25lbnRlc1wiLCBsaW5rOiBcIi92aWV3Q29tcG9uZW50cy9kaWRjb20tc2VsZWN0Lm1kXCIgfVxuICAgIF0sXG5cbiAgIFxuICAgIHNpZGViYXI6IFtcbiAgICAgIFwiL2dldC1zdGFydGVkXCIsXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQ29tcG9uZW50ZXNcIixcbiAgICAgICAgY29sbGFwc2FibGU6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJEaWRjb20gU2VsZWN0XCIsXG4gICAgICAgICAgICBsaW5rOiBcIi92aWV3Q29tcG9uZW50cy9kaWRjb20tc2VsZWN0Lm1kXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkRpZGNvbSBjb21wb25lbnRcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3ZpZXdDb21wb25lbnRzL3NlY3VuZC1jb21wb25lbnQubWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgICBcbiAgICBdLFxuICAgIHNpZGViYXJEZXB0aDogMixcbiAgfSksXG4gIHBsdWdpbnM6IFtcbiAgICBzZWFyY2hQbHVnaW4oe1xuICAgICBcbiAgICAgIGhvdEtleXM6IFsnY3RybCtrJywgJ2NtZCtrJ10sIFxuICAgIH0pLFxuICBdLFxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxufSk7XG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtYyxTQUFTLG9CQUFvQjtBQUNoZSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG1CQUFtQjtBQUc1QixPQUFPLFNBQVM7QUFDaEIsSUFBTSxFQUFFLGFBQWEsSUFBSTtBQUV6QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLE9BQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUVOLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUFBLE1BQzVCLEVBQUUsTUFBTSxlQUFlLE1BQU0sbUNBQW1DO0FBQUEsSUFDbEU7QUFBQSxJQUdBLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBRUY7QUFBQSxJQUNBLGNBQWM7QUFBQSxFQUNoQixDQUFDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFFWCxTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsSUFDN0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVMsWUFBWTtBQUN2QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
