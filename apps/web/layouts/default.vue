<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div class="p-4 border-b border-gray-200">
        <h1 class="text-xl font-bold text-indigo-600">AI No-Code</h1>
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <NuxtLink to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
          Dashboard
        </NuxtLink>
        <NuxtLink to="/builder" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
          App Builder
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div class="md:hidden">
          <!-- Mobile menu button placeholder -->
          <button class="text-gray-500">Menu</button>
        </div>
        <div class="flex items-center space-x-4">
          <Button variant="outline">New Project</Button>
        </div>
      </header>
      <div class="flex-1 overflow-auto p-6">
        <slot />
      </div>
    </main>
  </div>
</template>
