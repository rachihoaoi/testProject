// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//main.js是我们的入口文件，主要作用是初始化vue实例并使用需要的插件
import Vue from 'vue'
import App from './App'      //导入app模板
import router from './router'    //导入路由

Vue.config.productionTip = false
/*
productionTip
2.2.0 新增
类型： boolean
默认值： true
用法：
设置为 false 以阻止 vue 在启动时生成生产提示
 */

// 创建和挂载根实例
new Vue({
  el: '#app',  //提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
  router,
  template: '<App/>',
  components: { App } //
})
