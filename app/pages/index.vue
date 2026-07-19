<template>
  <div class="relative overflow-hidden bg-slate-50">
    <!-- Background grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <!-- Trust badge -->
        <div class="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100/80 rounded-full px-3.5 py-1.5 mb-8 text-xs font-semibold text-indigo-700 tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 00-2 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
          <span>Next-Generation Endpoint Protection & Auditing</span>
        </div>

        <!-- Catchy Main Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          Uncompromising <span class="text-indigo-600">Security</span>.<br class="hidden sm:inline" />
          Unmatched Development <span class="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Velocity</span>.
        </h1>

        <!-- Supporting Subtitle -->
        <p class="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          GoShield secures your cloud infrastructure with enterprise-grade Zero-Trust compliance. 
          Built for teams that deploy rapidly without breaking type safety or performance standards.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="#contact"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-750 transition-all duration-200 shadow-md shadow-indigo-100 hover:scale-[1.01]"
          >
            Get a Sandbox Environment
          </a>
          <a
            href="#features"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-950 transition-all duration-200 shadow-sm"
          >
            Explore Specifications
          </a>
        </div>

        <!-- Corporate Trust Indicators (Logos/Standards placeholder) -->
        <div class="pt-8 border-t border-slate-200/60 max-w-5xl mx-auto">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Secured Compliance & Tech Standards</p>
          <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <!-- ISO 27001 Badge -->
            <div class="flex items-center space-x-1.5 font-bold text-slate-600 text-sm">
              <span class="px-2 py-0.5 bg-slate-200 rounded text-xs">ISO</span>
              <span>27001 Certified</span>
            </div>
            <!-- SOC2 Badge -->
            <div class="flex items-center space-x-1.5 font-bold text-slate-600 text-sm">
              <span class="px-2 py-0.5 bg-slate-200 rounded text-xs">SOC2</span>
              <span>Type II Compliant</span>
            </div>
            <!-- GDPR Badge -->
            <div class="flex items-center space-x-1.5 font-bold text-slate-600 text-sm">
              <span class="px-2 py-0.5 bg-slate-200 rounded text-xs">GDPR</span>
              <span>Data Protection</span>
            </div>
            <!-- TS Strict Badge -->
            <div class="flex items-center space-x-1.5 font-bold text-slate-600 text-sm">
              <span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold">TS</span>
              <span>Strict Mode</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section (Adding depth to show corporate QA capabilities) -->
    <section id="features" class="py-20 bg-white border-y border-slate-100 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Strictest Standards, Zero Overhead
          </h2>
          <p class="text-slate-500 text-base sm:text-lg">
            We prove that absolute security and developer speed can co-exist. By applying strict type checking, fast formatting, and localized runtime sandboxes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-md hover:shadow-slate-100/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">100% Type-Safe Architecture</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Leverage strict TypeScript rules directly integrated into the Nuxt compilation loop. Catch code regression at edit-time, not in production.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-md hover:shadow-slate-100/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Ultra-Fast Biome Tooling</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Linting and formatting executed in milliseconds. Biome handles checks instantly, enforcing compliance rules globally without slowing CI pipelines.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:shadow-md hover:shadow-slate-100/50 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 010 18M12 3a9.004 9.004 0 00-8.716 6.747M12 3a9.004 9.004 0 018.716 6.747" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-slate-900 mb-2">Decentralized Runtime Config</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Environment variables injected securely through Nuxt's `runtimeConfig`. Zero hardcoded credentials, providing airtight secret management.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead/Contact Form Section -->
    <section id="contact" class="py-20 sm:py-28 relative scroll-mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Initialize Your GoShield Sandbox
          </h2>
          <p class="text-slate-500 text-base">
            Submit your information below to establish a secure link. A deployment script will initialize an isolated tenant instantly for evaluation.
          </p>
        </div>
        
        <!-- Contact Form Component Integration -->
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page head meta for SEO and corporate presentation appeal
useHead({
  title: 'GoShield - Enterprise-Grade Zero-Trust Compliance Platform',
  meta: [
    {
      name: 'description',
      content:
        'GoShield secures your cloud infrastructure with enterprise-grade Zero-Trust compliance. High security and velocity for development teams.',
    },
  ],
});
</script>
