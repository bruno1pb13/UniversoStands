
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
        props: {
          LogoRosa: true
        }
      },
      {
        path: '/stands',
        name: 'STANDS',
        component: () => import("../views/Home.vue"),
      },
      {
        path: '/sobre',
        name: 'ABOUT',
        component: () => import("../views/Home.vue"),
      }
    ]
  },
  
];