<template>
  <div id="app">
    <!--<h1>Shopping Cart Example</h1>-->
    <!--<hr>-->
    <!--<h2>Products</h2>-->
    <!--<product-list></product-list>-->
    <!--<hr>-->
    <!--<cart></cart>-->
    <h2>选择学期</h2>
    <schoolyear></schoolyear>

    <hr />
    <h2>vue自定义滚动条</h2>
    <vue-bar></vue-bar>

    <!--<hr>-->
    <!--<h2>表单</h2>-->
    <!--<FormPage></FormPage>-->
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
import Schoolyear from './Schoolyear.vue'
import FormPage from './Form.vue'
import VueBar from './VueBar.vue'

export default {
  components: { ProductList, Cart, Schoolyear, FormPage, VueBar }
}
</script>