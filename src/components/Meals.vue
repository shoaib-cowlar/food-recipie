<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="!meals" class="flex justify-center items-center p-5 bg-white">
      There are no meals
    </div>
  </div>
</template>

<script setup>

import MealItem from './MealItem.vue';

 // eslint-disable-next-line
const {meals} = defineProps({
    meals: {
        required: true,
        type: Array
    }
})

</script>
