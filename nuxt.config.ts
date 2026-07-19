// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable modern features and source folders
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss'],

  typescript: {
    strict: true,
    typeCheck: false, // Disable runtime typecheck tool, as we run it via npx nuxi typecheck in CI
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '', // Overridden by NUXT_PUBLIC_API_BASE_URL env variable
    },
  },
});
