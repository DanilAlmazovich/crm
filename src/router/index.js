import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const routes = [
  // auth

  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/auth/Login.vue'),
  },

  // order

  { path: '/', redirect: '/orders' },

  {
    path: '/orders',
    name: 'Index',
    component: Index,
  },
  {
    path: '/orders/create',
    name: 'Create',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Create.vue'),
  },
    {
        path: '/orders/edit/:id',
        name: 'OrdersEdit',
        component: () =>
            import(/* webpackChunkName: 'orders-edit' */ '../views/Edit.vue'),
    },
    {
        path: '/orders/show/:id',
        name: 'OrdersDetail',
        component: () =>
            import(/* webpackChunkName: 'orders-detail' */ '../views/Detail.vue'),
    },

  // inventory

  {
    path: '/inventories',
    name: 'Inventories',
    component: () =>
      import(/* webpackChunkName: 'inventory' */ '../views/Index.vue'),
  },
  {
    path: '/inventories/create',
    name: 'InventoryCreate',
    component: () =>
      import(/* webpackChunkName: 'inventory-create' */ '../views/Create.vue'),
  },
  {
    path: '/inventories/edit/:id',
    name: 'InventoryEdit',
    component: () =>
      import(/* webpackChunkName: 'inventory-edit' */ '../views/Edit.vue'),
  },
  {
      path: '/inventories/show/:id',
      name: 'InventoryDetail',
      component: () =>
          import(/* webpackChunkName: 'inventory-detail' */ '../views/Detail.vue'),
  },

  // bouquets

  {
    path: '/bouquets',
    name: 'Bouquets',
    component: () =>
      import(/* webpackChunkName: 'bouquets' */ '../views/Index.vue'),
  },
  {
    path: '/bouquets/create',
    name: 'BouquetsCreate',
    component: () =>
      import(/* webpackChunkName: 'bouquets-create' */ '../views/Create.vue'),
  },
  {
    path: '/bouquets/edit/:id',
    name: 'BouquetsEdit',
    props: true,
    component: () =>
      import(/* webpackChunkName: 'bouquets-edit' */ '../views/Edit.vue'),
  },
  {
      path: '/bouquets/show/:id',
      name: 'BouquetsDetail',
      component: () =>
          import(/* webpackChunkName: 'bouquets-show' */ '../views/Detail.vue'),
  },

  // customers

  {
    path: '/customers',
    name: 'Customers',
    component: () =>
      import(/* webpackChunkName: 'customers' */ '../views/Index.vue'),
  },
  {
    path: '/customers/create',
    name: 'CustomersCreate',
    component: () =>
      import(/* webpackChunkName: 'customers-create' */ '../views/Create.vue'),
  },
  {
    path: '/customers/:id',
    name: 'CustomersEdit',
    component: () =>
      import(/* webpackChunkName: 'customers-edit' */ '../views/Edit.vue'),
  },

  // statistic

  {
    path: '/statistic',
    name: 'Statistic',
    component: () =>
      import(/* webpackChunkName: 'statistic' */ '../views/Statistic.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
