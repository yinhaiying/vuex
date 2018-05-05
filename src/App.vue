<template>
  <div id="app">
    <product-list-one ></product-list-one>
    <product-list-two ></product-list-two>
  </div>
</template>
<script>
  import productListOne from './components/productListOne.vue'
  import productListTwo from './components/productListTwo.vue'

  export default {
    name: 'App',
    components: {
      'product-list-one': productListOne,
      'product-list-two': productListTwo
    }
  }
</script>

<style>

</style>
