<template>
    <div class="bg-white shadow rounded-2xl pb-3">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-2xl h-56 w-full object-cover" />
        </router-link>
        <div class="px-3">
            <h3 class="font-bold mb-2">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos amet dolores quibusdam,
                reiciendis eligendi rerum voluptatum quisquam ex accusantium totam maiores hic neque minima ab
                exercitationem soluta aperiam corrupti inventore.
            </p>
            <div class="flex items-center justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import YoutubeButton from './YoutubeButton.vue';

// eslint-disable-next-line
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>