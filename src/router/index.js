import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiceView from "../views/ServiceView.vue";
import CompanyView from "../views/CompanyView.vue";
import CareerView from "@/views/CareerView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogInnerView from "@/views/blogInnerView.vue";
import Layout from "@/layout/layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "service",
          name: "service",
          component: ServiceView,
        },
        {
          path: "company",
          name: "company",
          component: CompanyView,
        },
        {
          path: "career",
          name: "career",
          component: CareerView
        },
        {
          path: "blog",
          name: "blog",
          component: BlogView
        },
        {
          path: "contact",
          name: "contact",
          component: ContactView
        },
        {
          path: "blogInner",
          name: "blogInner",
          component: BlogInnerView
        },
      ],
    },
  ],
});

export default router;
