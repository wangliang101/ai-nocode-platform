export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated && to.path !== '/auth/login' && to.path !== '/auth/register') {
    return navigateTo('/auth/login')
  }
})
