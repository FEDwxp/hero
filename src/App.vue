<template>
  <div>
   <!-- headerbar -->
  <app-header></app-header> 
  <div class="container-fluid">
    <div class="row">
      <!-- sidebar -->
      <app-sidebar></app-sidebar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 主体部分 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
//引入headervabr组件
import AppHeader from './components/AppHeader.vue';
// 引入sidebar组件
import AppSidebar from './components/AppSidebar.vue';


export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
