import { createRouter, createWebHashHistory } from 'vue-router';
const Catalog = () => import("@/components/CatalogItems.vue")
const Item = () => import("@/components/ItemPage.vue")

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
  {
    path: "/",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/item",
    component: Item,
  },
  ]
});



export default router;