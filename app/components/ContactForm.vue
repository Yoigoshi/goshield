<template>
  <div class="w-full max-w-xl mx-auto">
    <!-- Card container with soft shadow and subtle border -->
    <div class="bg-white rounded-2xl shadow-xl shadow-slate-100/70 border border-slate-100 p-8 sm:p-10 relative overflow-hidden transition-all duration-300">
      
      <!-- Interactive Decorative Backdrop Gradients -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <!-- Success Screen -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="submissionStatus === 'success'" class="text-center py-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 animate-bounce">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Secure Connection Established</h3>
          <p class="text-slate-500 text-sm max-w-sm mx-auto mb-8">
            Thank you for reaching out. A security engineer from GoShield will contact you back within the next 2 hours.
          </p>
          <button
            type="button"
            @click="resetForm"
            class="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      </Transition>

      <!-- Main Form -->
      <div v-if="submissionStatus !== 'success'">
        <div class="mb-8">
          <h3 class="text-lg font-bold text-slate-900 mb-1">Inquire About GoShield Enterprise</h3>
          <p class="text-sm text-slate-500">Provide details below to request a secured sandboxed workspace demonstration.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
            <div class="relative">
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                :disabled="submissionStatus === 'loading'"
                class="w-full px-4 py-3 rounded-lg border bg-slate-50/50 text-slate-900 text-sm font-medium transition-all duration-200 outline-none"
                :class="[
                  errors.name 
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50/10' 
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white'
                ]"
                @blur="validateField('name')"
                @input="clearError('name')"
                placeholder="John Doe"
              />
            </div>
            <p v-if="errors.name" class="mt-1.5 text-xs text-red-600 font-medium flex items-center space-x-1">
              <span>{{ errors.name }}</span>
            </p>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Corporate Email</label>
            <div class="relative">
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                :disabled="submissionStatus === 'loading'"
                class="w-full px-4 py-3 rounded-lg border bg-slate-50/50 text-slate-900 text-sm font-medium transition-all duration-200 outline-none"
                :class="[
                  errors.email 
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50/10' 
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white'
                ]"
                @blur="validateField('email')"
                @input="clearError('email')"
                placeholder="john@company.com"
              />
            </div>
            <p v-if="errors.email" class="mt-1.5 text-xs text-red-600 font-medium flex items-center space-x-1">
              <span>{{ errors.email }}</span>
            </p>
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Message</label>
            <div class="relative">
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                :disabled="submissionStatus === 'loading'"
                class="w-full px-4 py-3 rounded-lg border bg-slate-50/50 text-slate-900 text-sm font-medium transition-all duration-200 outline-none resize-none"
                :class="[
                  errors.message 
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50/10' 
                    : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white'
                ]"
                @blur="validateField('message')"
                @input="clearError('message')"
                placeholder="Describe your security compliance requirements..."
              ></textarea>
            </div>
            <p v-if="errors.message" class="mt-1.5 text-xs text-red-600 font-medium flex items-center space-x-1">
              <span>{{ errors.message }}</span>
            </p>
          </div>

          <!-- Error Alert Banner -->
          <div v-if="submissionStatus === 'error'" class="p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-800 flex items-start space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <span class="font-bold">Transmission Error</span>
              <p class="text-xs text-red-700 mt-1">{{ serverErrorMessage || 'Failed to submit the form. Please try again later.' }}</p>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="submissionStatus === 'loading'"
            class="w-full relative flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white transition-all duration-200"
            :class="[
              submissionStatus === 'loading'
                ? 'bg-slate-700 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] hover:shadow-lg hover:shadow-indigo-100'
            ]"
          >
            <!-- Loading Spinner inside Button -->
            <svg v-if="submissionStatus === 'loading'" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            
            <span>{{ submissionStatus === 'loading' ? 'Encrypting & Sending...' : 'Request Demonstration' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

// Define the shape of our form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define the shape of validation errors
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Type for api submission status
type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

// Reactive states
const form = reactive<FormData>({
  name: '',
  email: '',
  message: '',
});

const errors = reactive<FormErrors>({});
const submissionStatus = ref<SubmissionStatus>('idle');
const serverErrorMessage = ref<string>('');

// Validate a specific field on user interaction (blur/change)
const validateField = (field: keyof FormData) => {
  if (field === 'name') {
    if (!form.name.trim()) {
      errors.name = 'Full name is required to initialize a handshake.';
    }
  }

  if (field === 'email') {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email) {
      errors.email = 'Corporate email address is required.';
    } else if (!emailRegex.test(form.email)) {
      errors.email = 'Please provide a valid corporate email address.';
    }
  }

  if (field === 'message') {
    if (!form.message) {
      errors.message = 'Please specify your security compliance requirements.';
    } else if (form.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
  }
};

// Clear active validation error for a field on typing input
const clearError = (field: keyof FormData) => {
  if (errors[field]) {
    errors[field] = undefined;
  }
};

// Reset form to starting conditions
const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  errors.name = undefined;
  errors.email = undefined;
  errors.message = undefined;
  submissionStatus.value = 'idle';
  serverErrorMessage.value = '';
};

// Form submit handler
const handleSubmit = async () => {
  // Run validations on all fields
  validateField('name');
  validateField('email');
  validateField('message');

  // Cancel if any error is active
  if (errors.name || errors.email || errors.message) {
    return;
  }

  submissionStatus.value = 'loading';
  serverErrorMessage.value = '';

  try {
    // Send standard POST request to local simulated endpoint
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    });

    // Handle response
    submissionStatus.value = 'success';
  } catch (error: unknown) {
    submissionStatus.value = 'error';

    // Type-safe extraction of Nuxt fetch error payload
    const fetchError = error as { data?: { message?: string } };
    serverErrorMessage.value =
      fetchError.data?.message || 'A network error occurred. Please try again.';
    console.error('Submission failed:', error);
  }
};
</script>
