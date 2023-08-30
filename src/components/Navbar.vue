<template>
        <header class="bg-white h-16 shadow flex justify-between items-center font-semibold">
        <router-link :to="{ name: 'home' }" class="inline-flex transition-colors items-center px-4 h-full hover:bg-purple-200"> Home </router-link>
      
      <div class="flex items-center h-full">
        <router-link :to="{name: 'byName'}" class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"> Search Meals </router-link>

        <router-link :to="{name: 'byLetter'}" class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"> Meals by Letters </router-link>

        <router-link :to="{name: 'ingredient'}" class="inline-flex transition-colors items-center px-2 h-full hover:bg-purple-200"> Meals By Ingredients </router-link>
      </div>
    </header>
</template>

<script setup>

</script>