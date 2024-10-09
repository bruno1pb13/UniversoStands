
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
      },
    ]
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => import("../views/legal/index.vue"),
    children: [
      {
        path: '/legal/politicadeprivacidade',
        name: 'Politica de privacidade',
        component: () => import("../views/legal/politicaDePrivacidade.vue"),
      }
    ]
  }
  
];