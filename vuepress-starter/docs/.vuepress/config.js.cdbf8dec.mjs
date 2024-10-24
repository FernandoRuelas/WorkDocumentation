// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import searchPlugin from "@vuepress/plugin-search";
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
    // Add searchPlugin to plugins array
    searchPlugin()
  ],
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvRmVybmFuZG9fUm9kcmlndWV6L0RvY3VtZW50cy9wcnVlYmFzL2RvY3VtZW50YXRpb24vdnVlcHJlc3Mtc3RhcnRlci9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRmVybmFuZG9fUm9kcmlndWV6XFxcXERvY3VtZW50c1xcXFxwcnVlYmFzXFxcXGRvY3VtZW50YXRpb25cXFxcdnVlcHJlc3Mtc3RhcnRlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0Zlcm5hbmRvX1JvZHJpZ3Vlei9Eb2N1bWVudHMvcHJ1ZWJhcy9kb2N1bWVudGF0aW9uL3Z1ZXByZXNzLXN0YXJ0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIkB2dWVwcmVzcy90aGVtZS1kZWZhdWx0XCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzL2NsaVwiO1xuaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiO1xuXG5cblxuaW1wb3J0ICBzZWFyY2hQbHVnaW4gIGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tc2VhcmNoJztcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgbGFuZzogXCJlcy1FU1wiLFxuXG4gIHRpdGxlOiBcIkRpZGNvbSBEZXZzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkJpZW52ZW5pZG8gRGV2IVwiLFxuICBzbW9vdGhTY3JvbGw6IHRydWUsXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGxvZ286IFwiaHR0cHM6Ly92dWVqcy5wcmVzcy9pbWFnZXMvaGVyby5wbmdcIixcbiAgIFxuICAgIG5hdmJhcjogW1xuICAgICAgeyB0ZXh0OiBcIkluaWNpb1wiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIkNvbXBvbmVudGVzXCIsIGxpbms6IFwiL3ZpZXdDb21wb25lbnRzL2RpZGNvbS1zZWxlY3QubWRcIiB9XG4gICAgXSxcblxuICAgXG4gICAgc2lkZWJhcjogW1xuICAgICAgXCIvZ2V0LXN0YXJ0ZWRcIixcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDb21wb25lbnRlc1wiLFxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkRpZGNvbSBTZWxlY3RcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3ZpZXdDb21wb25lbnRzL2RpZGNvbS1zZWxlY3QubWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiRGlkY29tIGNvbXBvbmVudFwiLFxuICAgICAgICAgICAgbGluazogXCIvdmlld0NvbXBvbmVudHMvc2VjdW5kLWNvbXBvbmVudC5tZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgIFxuICAgIF0sXG4gICAgc2lkZWJhckRlcHRoOiAyLFxuICB9KSxcblxuICBwbHVnaW5zOiBbIC8vIEFkZCBzZWFyY2hQbHVnaW4gdG8gcGx1Z2lucyBhcnJheVxuICAgIHNlYXJjaFBsdWdpbigpXG4gIF0sXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbn0pO1xuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbWMsU0FBUyxvQkFBb0I7QUFDaGUsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxtQkFBbUI7QUFJNUIsT0FBUSxrQkFBbUI7QUFHM0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZCxPQUFPLGFBQWE7QUFBQSxJQUNsQixNQUFNO0FBQUEsSUFFTixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sVUFBVSxNQUFNLElBQUk7QUFBQSxNQUM1QixFQUFFLE1BQU0sZUFBZSxNQUFNLG1DQUFtQztBQUFBLElBQ2xFO0FBQUEsSUFHQSxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUVGO0FBQUEsSUFDQSxjQUFjO0FBQUEsRUFDaEIsQ0FBQztBQUFBLEVBRUQsU0FBUztBQUFBO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBRUEsU0FBUyxZQUFZO0FBQ3ZCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
