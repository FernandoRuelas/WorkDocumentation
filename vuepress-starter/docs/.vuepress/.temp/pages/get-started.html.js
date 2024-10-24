import comp from "C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Introducción\",\"lang\":\"es-ES\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"¿Cómo empiezo?\",\"slug\":\"¿como-empiezo\",\"link\":\"#¿como-empiezo\",\"children\":[]},{\"level\":2,\"title\":\"Tecnologías que utilizamos\",\"slug\":\"tecnologias-que-utilizamos\",\"link\":\"#tecnologias-que-utilizamos\",\"children\":[{\"level\":3,\"title\":\"Tecnologías de ayuda para crear proyectos\",\"slug\":\"tecnologias-de-ayuda-para-crear-proyectos\",\"link\":\"#tecnologias-de-ayuda-para-crear-proyectos\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<p>¡Nos da gusto que estés con nosotros! Hemos preparado una guía para que te sea más fácil comenzar a trabajar.</p>\\n<h2>¿Cómo empiezo?</h2>\\n<p>Para empezar, necesitas instalar las siguientes herramientas:</p>\\n<ul>\\n<li><strong><a href=\\\"https://visualstudio.microsoft.com/vs/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Visual Studio</a></strong> (2019 o 2022)</li>\\n<li><strong><a href=\\\"https://www.postman.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Postman</a></strong></li>\\n<li><strong><a href=\\\"https://chat.google.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Google Chat</a></strong> (opcional): Recuerda siempre estar pendiente de tu chat y correo electrónico.</li>\\n</ul>\"}")
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
