<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
    <!-- Corporate Header -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo & Brand -->
          <div class="flex items-center space-x-2.5">
            <!-- Professional Shield SVG Icon -->
            <div class="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight text-slate-900">
              Go<span class="text-indigo-600">Shield</span>
            </span>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" class="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#security" class="hover:text-indigo-600 transition-colors">Security Standards</a>
            <a href="#infrastructure" class="hover:text-indigo-600 transition-colors">Infrastructure</a>
            <a href="#about" class="hover:text-indigo-600 transition-colors">Enterprise</a>
          </nav>

          <!-- Call to Action -->
          <div class="flex items-center space-x-4">
            <a href="#contact" class="hidden sm:inline-flex items-center justify-center px-4.5 py-2 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-sm shadow-slate-200">
              Request Access
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Corporate Footer -->
    <footer class="bg-white border-t border-slate-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-slate-900">GoShield Labs</span>
          </div>
          <div class="flex space-x-6 text-xs text-slate-500">
            <a href="#" class="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-indigo-600 transition-colors">Security Disclosure</a>
            <span>&copy; {{ new Date().getFullYear() }} GoShield. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout logic can be placed here if needed in the future
</script>
