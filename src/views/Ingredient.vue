<template>
  <div>
    <h1 class="text-4xl font-bold mb-4 p-4">Ingredients</h1>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 m-3 shadow"
    >   
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";

const ingredients = ref([]);
onMounted(() => {
  axiosClient.get("list.php?i=latest").then(({ data }) => {
    console.log(data.meals)
    ingredients.value = data.meals;
  });
});
</script>
