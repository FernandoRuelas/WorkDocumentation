import comp from "C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/viewComponents/secund-component.html.vue"
const data = JSON.parse("{\"path\":\"/viewComponents/secund-component.html\",\"title\":\"Este es de prueba\",\"lang\":\"es-ES\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"viewComponents/secund-component.md\",\"excerpt\":\"\\n\"}")
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
