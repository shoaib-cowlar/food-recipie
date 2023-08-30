<template>
    <div class="p-8">
        <div class="p-8 flex items-center justify-between">
            <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full p-2 outline-none"
                placeholder="Search for Meals" />
            <button type="button" @click="searchMeal"
                class="ms-2 inline-block rounded-full border-2 border-blue-400 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                Search
            </button>
        </div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'

const keyword = ref("");
const meals = computed(() => store.state.searchedMeal);
const route = useRoute();
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeal()
    }
});

function searchMeal() {
    
    store.dispatch("searchMeals", keyword.value);
}
</script>
