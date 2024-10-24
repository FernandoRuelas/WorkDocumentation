import comp from "C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"es-ES\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Comenzar\",\"link\":\"/get-started\",\"type\":\"primary\"},{\"text\":\"wiki-didcom\",\"link\":\"https://wiki.didcom.mx/dev/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Plantillas\",\"details\":\"El uso de las plantillas nos ahorra tiempo y simplifica de una manera efectiva nuestro trabajo y a su vez hace que nuestros proyectos sigan la misma estructura\"},{\"title\":\"Componentes\",\"details\":\"Utiliza los componentes y tecnologias creadas por desarrolladores de didcom, colabora en crear cosas que podamos reutilizar.\"},{\"title\":\"Tecnologias\",\"details\":\"Encuentra las tecnologias utilizadas por los desarrolladores de didcom para poder tener una referencia o un camino para tu proyecto.\"}],\"footer\":\"Ddidcom devs | V0.0.1 © 2024-present Fernando R. Ruelas\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
