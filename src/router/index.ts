import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  next();
  // return false;
});

export default router;
