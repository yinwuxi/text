import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue'; // 确保路径正确
import ProductDetail from '../views/ProductDetail.vue'; // 确保路径正确

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category/:categoryName',
        name: 'Category',
        component: Category,
        props: route => ({ categoryName: route.params.categoryName }) // 通过 props 传递参数
    },
    {
        path: '/product/:productId',
        name: 'ProductDetail',
        component: ProductDetail,
        props: route => ({ productId: route.params.productId }) // 通过 props 传递参数
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
