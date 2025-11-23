<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Project Card Placeholder -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">My First App</h3>
        <p class="text-gray-500 mt-2">Last edited 2 hours ago</p>
        <div class="mt-4 flex justify-end">
          <NuxtLink to="/builder" class="text-indigo-600 hover:text-indigo-800 font-medium">
            Edit
          </NuxtLink>
        </div>
      </div>
      
      <!-- Create New Card -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-dashed flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50">
        <div class="h-12 w-12 text-gray-400 mb-2">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900">Create New App</h3>
        <p class="text-gray-500 mt-1">Generate with AI</p>
      </div>
    </div>
  </div>
</template>
