import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName";
import MealsByIngredient from "../views/MealsByIngredient";
import Ingredient from "../views/Ingredient";
import MealsByLetter from "../views/MealsByLetter";
import MealsDetails from "../views/MealsDetails";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/ingredient",
        name: "ingredient",
        component: Ingredient,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealsDetails,
      },
    ],
  },{
    path:'/guest',
    component:GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
