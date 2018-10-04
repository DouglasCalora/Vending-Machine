<template>
  <div id="app">
    <h1>{{title}} {{totalPrice}}</h1>
    <container>
      <div class="Product">
        <product v-for="product in products" :src="product.src" :name="product.name" :price="product.price" :code="product.code"></product>
      </div>
    </container>
    
    <container>
      <form-search @searched="getTerm"></form-search>
      <coin></coin>
      <div v-if="term">
        <div v-if="searchedProduct">
          <div class="Product Product--alignMiddle">
            <product :src="searchedProduct.product.src" :name="searchedProduct.product.name" :price="searchedProduct.product.price" :code="searchedProduct.product.code">
            </product>
          </div>
          <!-- <btn-button class="Form-button" @click="addedProduct(searchedProduct)">add</btn-button> -->
          <button class="Form-button"  @click="addedProduct(searchedProduct.product)" v-show="!outOfStock">add</button>
        </div>
        <div v-else>
          <message :messageTitle="messages.messageTitle" messageStyle="Message--danger" :messageDescription="messages.errorDescription"></message>
        </div>
      </div>
      
      <div>
    
      <pay v-if="totalPrice > 0 && !cashInfos.finished" :totalPrice="totalPrice" @payd="getCoin" :alreadyPayd="alreadyPayd"></pay> 
      <!-- <p v-if="totalPrice > 0 && !cashInfos.isValidityCoin">AAA</p> -->
      </div>
      <message v-if="cashInfos.finished" messageStyle="Message--success" messageTitle="AEEE" messageDescription="compra realizada com sucesso"></message>  
      <message v-if="cashInfos.finished" messageStyle="Message--success" :messageTitle="message.messageTitle" :messageDescription="message.faild"></message>  


      

    </container>
  </div>
</template>

<script>
//Javascript
import Products from './domain/Products'
import CashRegister from './domain/CashRegister'

//Components
import Coin from './components/Coin'
import Container from './components/Container'
import Product from './components/Product'
import FormSearch from './components/FormSearch'
import Message from './components/Message'
import Button from './components/Button'
import Payment from './components/Payment'

const productMachine = new Products()
const cashRegister = new CashRegister()

export default {
  name: 'app',

  data () {
    return {
      title: 'Nossos Produtos',
      totalPrice: 0,
      outOfStock: false,
      term: '',
      coin: '',
      alreadyPayd: '',
      cashInfos: '',
      messages: {
        messageTitle: 'OOPPPSSS!!!', 
        errorDescription: 'Produto pesquisado não exite ou está fora de estoque',
        faild: 'Infelizmente não temos troco suficiente para completar esta transação. Estamos devolvendo o seu dinheiro'
      }
    }
  },

  computed: {
    products () {
			return productMachine.showProducts()
    },
    
    searchedProduct() {
      this.outOfStock = productMachine.getProduct(this.term).outOfStock

      return productMachine.getProduct(this.term)
    }
  },

  components: {
    'coin': Coin,
    'container': Container,
    'product': Product,
    'form-search': FormSearch,
    'message': Message,
    'btn-button': Button,
    'pay': Payment
  },

  methods: {
    getTerm(value) {
      this.term = value
    },

    getCoin(coin) {
      this.coin = coin
      this.cashInfos = cashRegister.getCoin(this.coin)
      this.alreadyPayd = this.cashInfos.totalPayd
    },

    addedProduct(product) {
      let added = productMachine.addProduct(product)
      this.totalPrice = added.totalPrice
      this.outOfStock = added.outOfStock
      cashRegister.getTotalPrice(this.totalPrice)
    }
  }
}
</script>

<style lang="scss">
</style>
