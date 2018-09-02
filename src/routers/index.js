// 引入路由包
import VueRouter from 'vue-router';
// 引入vue
import Vue from 'vue';
// 检测路由，使用
Vue.use(VueRouter);
// 引入路由组件
import HeroList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import AddHero from '../views/heroes/addHero.vue';
import EditHero from '../views/heroes/edithero.vue';
import NotFound from '../views/notfount.vue';

// 创建路由对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/heroes'
    }, {
        path: '/heroes',
        component: HeroList
    }, {
        path: '/equips',
        component: EquipsList
    }, {
        path: '/weapons',
        component: WeaponsList
    }, {
        path: '/heroes/add',
        component: AddHero
    }, {
        path: '/heroes/edit',
        component: EditHero
    }, {
        path: '*',
        component: NotFound
    }]
});

export default router