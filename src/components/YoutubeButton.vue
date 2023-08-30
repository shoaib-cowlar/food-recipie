<template>
    <a :href="href" target="_blank"
      class="py-2 px-3 text-white border-2 bg-red-500 border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
      <slot></slot>
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
 defineProps({
    href: String
  });
  </script>
  