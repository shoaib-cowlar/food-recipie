<template>
  <div class="flex flex-col items-center p-8">
    <div class="w-full">
      <!-- Add the w-full class to the parent div -->
  
    </div>

   
  </div>
</template>

<script setup>
// import { computed } from 'vue';
// import store from '../store'
import axiosClient from "../axiosClient";

import { onMounted, ref } from "vue";


const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
