import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  name?: string
}

interface AuthState {
  user: User | null
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: useCookie('token').value || null,
  }),
  actions: {
    async login(email: string, pass: string) {
      const config = useRuntimeConfig()
      try {
        const { data, error } = await useFetch(`${config.public.apiBaseUrl}/auth/login`, {
          method: 'POST',
          body: { email, password: pass },
        })

        if (error.value) {
          throw new Error(error.value.message || 'Login failed')
        }

        if (data.value) {
          const response = data.value as any
          this.token = response.access_token
          const tokenCookie = useCookie('token')
          tokenCookie.value = response.access_token
          
          // In a real app, you might want to fetch user details here
          // For now, we'll just set the email
          this.user = { id: 0, email } 
          return true
        }
      } catch (err) {
        console.error('Login error:', err)
        throw err
      }
      return false
    },

    async register(email: string, pass: string) {
      const config = useRuntimeConfig()
      try {
        const { data, error } = await useFetch(`${config.public.apiBaseUrl}/auth/register`, {
          method: 'POST',
          body: { email, password: pass },
        })

        if (error.value) {
          throw new Error(error.value.message || 'Registration failed')
        }

        if (data.value) {
          return true
        }
      } catch (err) {
        console.error('Registration error:', err)
        throw err
      }
      return false
    },

    logout() {
      this.token = null
      this.user = null
      const tokenCookie = useCookie('token')
      tokenCookie.value = null
      navigateTo('/auth/login')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  }
})
