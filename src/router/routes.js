
export default [
  {
    path: "/",
    name: "MAIN",
    component: () => import("../views/index.vue"),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'HOME',
        component: () => import("../views/Home.vue"),
      },
      {
        path: '/feiras',
        name: 'FEIRAS',
        component: () => import("../views/Feiras.vue"),
      },
      {
        path: '/stands',
        name: 'STANDS',
        component: () => import("../views/Stands.vue"),
      },
      {
        path: '/sobre',
        name: 'ABOUT',
        component: () => import("../views/About.vue"),
      }
    ]
  },
  
];