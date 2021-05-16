import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import ProductCreate from '../views/ProductCreate.vue';
// import ProductUpdate from '../views/ProductUpdate.vue';
// import SalesList from '../views/SalesList.vue';
// import ImageInsert from '../views/ImageInsert.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate,
  },
  // {
  //   path: '/update',
  //   name: 'ProductUpdate',
  //   component: ProductUpdate,
  // },
  // {
  //   path: '/sales',
  //   name: 'SalesList',
  //   component: SalesList,
  // },
  // {
  //   path: '/image_insert',
  //   name: 'ImageInsert',
  //   component: ImageInsert,
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
