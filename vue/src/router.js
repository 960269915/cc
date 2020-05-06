import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// import Foo from "../src/pages/Foo.vue";
import FooSon from "../src/pages/FooSon.vue";
import Bar from "../src/pages/Bar.vue";
import NotFound from "../src/pages/NotFound.vue";
const routes = [
  { path: "/", component: (resolve) => require(["@/pages/Foo"], resolve) },
  {
    path: "/foo",
    name: "foo",
    component: (resolve) => require(["@/pages/Foo"], resolve),
    children: [
      {
        path: "son/:id",
        name: "fooSon",
        component: FooSon,
      },
    ],
  },
  {
    path: "/bar",
    name: "bar",
    component: Bar,
    meta: { requiresAuth: true, tets: 1 },
  },
  { path: "*", component: NotFound },
];
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  next();
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
});

export default router;
