import comp from "C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/didcom-select.html.vue"
const data = JSON.parse("{\"path\":\"/didcom-select.html\",\"title\":\"Didcom select\",\"lang\":\"es-ES\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Instalacion\",\"slug\":\"instalacion\",\"link\":\"#instalacion\",\"children\":[{\"level\":3,\"title\":\"intalación por CDN\",\"slug\":\"intalacion-por-cdn\",\"link\":\"#intalacion-por-cdn\",\"children\":[]}]},{\"level\":2,\"title\":\"Vista previa del componente simple\",\"slug\":\"vista-previa-del-componente-simple\",\"link\":\"#vista-previa-del-componente-simple\",\"children\":[{\"level\":3,\"title\":\"Código del componente\",\"slug\":\"codigo-del-componente\",\"link\":\"#codigo-del-componente\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"didcom-select.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
