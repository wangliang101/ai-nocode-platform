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

async function handleRegister() {
  error.value = ''
  isLoading.value = true
  
  try {
    const success = await authStore.register(email.value, password.value)
    if (success) {
      // Auto login or redirect to login
      navigateTo('/auth/login')
    }
  } catch (e: any) {
    error.value = e.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="w-full max-w-md px-6">
      <!-- Logo/Brand Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get Started</h1>
        <p class="text-gray-600 dark:text-gray-400">Create your account to start building</p>
      </div>

      <!-- Register Card -->
      <Card class="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 shadow-xl border-0 p-8">
        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- Email Input -->
          <div class="space-y-2">
            <Label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </Label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <Input 
                id="email" 
                v-model="email" 
                type="email" 
                placeholder="you@example.com" 
                class="pl-10 h-11 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" 
                required 
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <Label for="password" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </Label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <Input 
                id="password" 
                v-model="password" 
                type="password" 
                placeholder="Create a strong password"
                class="pl-10 h-11 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" 
                required 
              />
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Must be at least 8 characters long
            </p>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm text-red-600 dark:text-red-400">{{ error }}</span>
          </div>

          <!-- Terms Notice -->
          <div class="flex items-start gap-2 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
            <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-xs text-indigo-700 dark:text-indigo-300">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>

          <!-- Submit Button -->
          <Button 
            type="submit" 
            class="w-full h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200" 
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              Create Account
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Button>
        </form>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Already registered?</span>
          </div>
        </div>

        <!-- Login Link -->
        <div class="text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <NuxtLink 
              to="/auth/login" 
              class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              Sign in
            </NuxtLink>
          </p>
        </div>
      </Card>

      <!-- Footer -->
      <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 AI No-Code Platform. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
