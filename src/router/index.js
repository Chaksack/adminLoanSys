import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogIn.vue";
// const SideBar = () => import("/Users/chakdahahsackey/pavelonv0.01/src/components/SideBar.vue")

const routes = [
  {
    path: "/",
    name: "login",
    component: LogIn,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ForgotPassword.vue"),
  },
  {
    path: "/newpassword",
    name: "NewPassword",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewPassword.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products/Products.vue"),
  },
  {
    path: "/borrowers",
    name: "Borrowers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Borrowers.vue"),
  },
  {
    path: "/disburse",
    name: "Disburse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Disburse.vue"),
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Analytics.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reports.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
