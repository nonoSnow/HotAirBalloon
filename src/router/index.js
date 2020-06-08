import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入使用路由管理的组件
import Index from '../views/Index.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import NewsList from '../views/NewsList.vue';
import NewsDetail from '../views/NewsDetail.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';
import SearchProduct from '../views/SearchProduct.vue';

// 按照固定格式 配置 路径 和 组件 之间的对应关系
const routes = [
  {
    path:'/',
    component:Index,
  },
  {
    path:'/register',
    component:Register,
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/newslist',
    component:NewsList,
  },
  {
    path:'/newsdetail/:nid',
    component:NewsDetail,
  },
  {
    path:'/about',
    component:About,
  },
  {
    path:'/product',
    component:Product,
  },
  {
    path:'/productdetail/:pid',
    component:ProductDetail,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/searchproduct/:info',
    component:SearchProduct,
  },
];

// 路由对象制作
export const router = new VueRouter({
  mode:'history',
  routes
})