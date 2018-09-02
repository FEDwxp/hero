// 引入路由包
import VueRouter from 'vue-router'
// 检测路由，使用
Vue.use(VueRouter);
// 引入路由组件
import HeroList from './views/heroes/List.vue';
import EquipsList from './views/equips/List.vue';
import WeaponsList from './views/weapons/List.vue';

// 创建路由对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/heroes',
        component: HeroList
    }, {
        path: '/equips',
        component: EquipsList
    }, {
        path: '/weapons',
        component: WeaponsList
    }]
});

export default router;