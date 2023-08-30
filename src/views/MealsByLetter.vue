<template>
  <div class="flex gap-2 pt-3  items-center justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals"/>

</template>

<script setup>
import store from "@/store";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});


watch(()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)
})

</script>
