export default defineNuxtRouteMiddleware(to => {
  if (!to.path.endsWith('/')) {
    return to.fullPath.replace(to.path, to.path + '/')
  }
})
