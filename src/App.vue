<template>
  <div id="app" class="Section">
    <h1 class="Section-title">{{title}}</h1>
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
            <div class="Section-actions">
              <button class="Button"  @click="addedProduct(searchedProduct.product)" 
              v-show="!outOfStock && !cashInfos.finished && !cashInfos.finishedCharge && alreadyPayd === 0">add</button>
            </div>
          </div>
        </div>
        <div v-else>
          <message :messageTitle="messages.errorTitle" messageStyle="Message--danger" :messageDescription="messages.errorDescription"></message>
        </div>
      </div>
      
      <div>
      <message v-if="cashInfos.finished && !cashInfos.finishedCharge" messageStyle="Message--success" messageTitle="Tudo Certo!"
      messageDescription="compra realizada com sucesso"></message>  

      <message v-if="cashInfos.faildBuy" messageStyle="Message--danger" :messageTitle="messages.errorTitle" :messageDescription="messages.faild"></message> 
       
      <pay v-if="totalPrice > 0 && !cashInfos.finished && !cashInfos.faildBuy && totalPrice >= alreadyPayd" :totalPrice="totalPrice" @payd="getCoin" :alreadyPayd="alreadyPayd"></pay> 

      <message v-if="cashInfos.finishedCharge" messageStyle="Message--success" messageTitle="Tudo Certo!" 
      :messageDescription="chargeBack(cashInfos.charge, cashInfos.memorizeCharge)"></message>
      </div>
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
      alreadyPayd: 0,
      cashInfos: '',
      messages: {
        errorTitle: 'OOPPPSSS!!!', 
        errorDescription: 'Produto pesquisado não exsite ou está fora de estoque',
        faild: 'Infelizmente não temos troco suficiente para completar esta transação. Estamos devolvendo o seu dinheiro'
      }
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

  computed: {
    products () {
			return productMachine.showProducts()
    },
    
    searchedProduct() {
      this.outOfStock = productMachine.getProduct(this.term).outOfStock
  
      return productMachine.getProduct(this.term)
    }
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
    },

    chargeBack(charge, memorizeCharge) {
      let message = []

      for(let coin in charge) {
        message.push(`${charge[coin]} moeda(s) de R$${this.money(coin)} / `)
      }

      return `O seu troco é de R$${this.money(memorizeCharge)}. Você está recebendo ${message.join('')}. `
    },

    money(input) {
      let output = (input / 100).toFixed(2)
  
      return output.replace('.', ',')
    }
  }
}
</script>

<style lang="scss">
@import './styles/settings';

.Section {
  &-title {
    color: $primary-color;
    text-align: center;
  }

  &-actions {
    width: 100%;
    text-align: center;
  }
}
</style>
