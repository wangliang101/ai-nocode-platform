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

interface LoginResponse {
  access_token: string
  user?: User
}

interface RegisterResponse {
  id: number
  email: string
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
        const response = await $fetch<LoginResponse>(`${config.public.apiBaseUrl}/auth/login`, {
          method: 'POST',
          body: { email, password: pass },
        })

        if (response && response.access_token) {
          this.token = response.access_token
          const tokenCookie = useCookie('token')
          tokenCookie.value = response.access_token
          
          // Set user data from response or create from email
          this.user = response.user || { id: 0, email }
          return true
        }
        return false
      } catch (err: any) {
        console.error('Login error:', err)
        // Parse error message from API response
        const errorMessage = err?.data?.message || err?.message || 'Login failed. Please check your credentials.'
        throw new Error(errorMessage)
      }
    },

    async register(email: string, pass: string) {
      const config = useRuntimeConfig()
      try {
        const response = await $fetch<RegisterResponse>(`${config.public.apiBaseUrl}/auth/register`, {
          method: 'POST',
          body: { email, password: pass },
        })

        if (response && response.id) {
          return true
        }
        return false
      } catch (err: any) {
        console.error('Registration error:', err)
        // Parse error message from API response
        const errorMessage = err?.data?.message || err?.message || 'Registration failed. Please try again.'
        throw new Error(errorMessage)
      }
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
