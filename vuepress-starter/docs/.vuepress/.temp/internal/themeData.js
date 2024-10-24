export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"Inicio\",\"link\":\"/\"},{\"text\":\"Componentes\",\"link\":\"/viewComponents/didcom-select.md\"}],\"sidebar\":[\"/get-started\",{\"text\":\"Componentes\",\"collapsable\":true,\"children\":[{\"text\":\"Didcom Select\",\"link\":\"/viewComponents/didcom-select.md\"},{\"text\":\"Didcom component\",\"link\":\"/viewComponents/secund-component.md\"}]}],\"sidebarDepth\":2,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
