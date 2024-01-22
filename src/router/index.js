import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/back/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/back/Coupons.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/user/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/user/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/user/UserProduct.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/user/UserCheckout.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/user/AboutView.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
