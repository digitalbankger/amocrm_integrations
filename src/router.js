import { createWebHistory, createRouter } from "vue-router";
const Catalog = () => import("@/components/CatalogItems.vue")
const Item = () => import("@/components/ItemPage.vue")

const routes = [
  {
    path: "/",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/item",
    component: Item,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;