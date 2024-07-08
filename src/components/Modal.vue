<template>
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold">{{ title }}</h2>
          <button @click="close" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>
        <div class="mb-4">
          <slot></slot>

        </div>
        <div class="flex justify-end">
          <button @click="close" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        default: 'Modal Title',
        required: true,
      },
    },
    methods: {
    close() {
        console.log('close in modal');
        this.$emit('handleClose');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales opcionales */
  </style>
  