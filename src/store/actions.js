import axiosClient from "@/axiosClient";

export async function searchMeals({commit},keyword){
    // commit('setLoading', true);
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        commit('setSearchedMeals',data.meals)
    }).catch((err)=>{
        console.error('Error fetching searched meal:', err);
    })
}

export async function searchMealsByLetter({commit},letter){
    // commit('setLoading', true);
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setMealsByLetter',data.meals)
    }).catch((err)=>{
        console.error('Error fetching searched meal:', err);
    })
}

export async function searchMealsByIngredient({commit},ingredient){
    // commit('setLoading', true);
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data})=>{
        commit('setMealsByIngredient',data.meals)
    }).catch((err)=>{
        console.error('Error fetching searched meal:', err);
    })
}