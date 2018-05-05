import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    products: [
      {name: '马云', price: 200},
      {name: '马化腾', price: 180},
      {name: '马冬梅', price: 20},
      {name: '马容', price: 10}
    ]
  },
  getters: {
    saleProducts(state) {
      var saleProducts = state.products.map((item) => {
        return {
          name: '**' + item.name + '**',
          price: item.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice(state,payload) {
      // setTimeout(function () {
        state.products.forEach((item) => {
          item.price -= payload
        })
      // }, 3000)
    }
  },
  actions:{
    reducePriceAction(context,payload){
      setTimeout(function(){
        context.commit("reducePrice",payload)
      },2000)
    }
  }
})
