export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Introducción"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/viewComponents/didcom-select.html", { loader: () => import(/* webpackChunkName: "viewComponents_didcom-select.html" */"C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/viewComponents/didcom-select.html.js"), meta: {"title":"Didcom select"} }],
  ["/viewComponents/secund-component.html", { loader: () => import(/* webpackChunkName: "viewComponents_secund-component.html" */"C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/viewComponents/secund-component.html.js"), meta: {"title":"Este es de prueba"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Fernando_Rodriguez/Documents/pruebas/documentation/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
