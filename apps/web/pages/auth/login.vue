<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

async function handleLogin() {
  error.value = ''
  isLoading.value = true
  
  try {
    const success = await authStore.login(email.value, password.value)
    if (success) {
      navigateTo('/')
    } else {
      error.value = 'Invalid credentials'
    }
  } catch (e: any) {
    error.value = e.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
    <div class="w-full max-w-6xl animate-in fade-in duration-500">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Branding (Hidden on mobile, visible on desktop) -->
        <div class="hidden lg:block animate-in slide-in-from-left duration-700">
          <div class="space-y-6">
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 class="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 mb-4">
                Welcome Back
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Sign in to continue to AI No-Code Platform</p>
            </div>
            <div class="space-y-4 text-gray-600 dark:text-gray-400">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Build Without Code</h3>
                  <p class="text-sm">Create powerful applications using AI-driven no-code tools</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">AI-Powered</h3>
                  <p class="text-sm">Leverage cutting-edge AI to accelerate your development</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Deploy Instantly</h3>
                  <p class="text-sm">Go from idea to production in minutes, not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Login Form -->
        <div class="w-full">
          <!-- Mobile Logo (Visible on mobile only) -->
          <div class="lg:hidden text-center mb-8 animate-in slide-in-from-top duration-700">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 class="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 mb-3">
              Welcome Back
            </h1>
            <p class="text-base text-gray-600 dark:text-gray-400">Sign in to continue to AI No-Code Platform</p>
          </div>

          <!-- Login Card -->
      <Card class="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 animate-in slide-in-from-bottom duration-700">
        <form @submit.prevent="handleLogin" class="space-y-6 px-2">
          <!-- Email Input -->
          <div class="space-y-2.5">
            <Label for="email" class="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Email Address
            </Label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                <svg class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <Input 
                id="email" 
                v-model="email" 
                type="email" 
                placeholder="you@example.com" 
                class="pl-12 h-12 text-base transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600" 
                required 
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <Label for="password" class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Password
              </Label>
              <a href="#" class="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors">
                Forgot password?
              </a>
            </div>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                <svg class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <Input 
                id="password" 
                v-model="password" 
                type="password" 
                placeholder="Enter your password"
                class="pl-12 h-12 text-base transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600" 
                required 
              />
            </div>
          </div>

          <!-- Error Alert -->
          <Alert v-if="error" variant="destructive" class="animate-in slide-in-from-top duration-300">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <AlertDescription>{{ error }}</AlertDescription>
          </Alert>

          <!-- Submit Button -->
          <Button 
            type="submit" 
            class="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]" 
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              Sign In
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Button>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white/90 dark:bg-gray-800/90 text-gray-500 dark:text-gray-400 font-medium">New to platform?</span>
          </div>
        </div>

        <!-- Sign Up Link -->
        <div class="text-center pb-2">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <NuxtLink 
              to="/auth/register" 
              class="font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors hover:underline underline-offset-4"
            >
              Create account
            </NuxtLink>
          </p>
        </div>
          </Card>

          <!-- Footer -->
          <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 animate-in fade-in duration-1000">
            <p>© 2024 AI No-Code Platform. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
