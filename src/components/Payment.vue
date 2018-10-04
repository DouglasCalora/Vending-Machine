<template>
  <div class="Payment">
    <div class="Payment-content">
      <span class="Payment-item">Valor total: {{totalPrice}}</span>
      <span class="Payment-item">Valor pago: {{alreadyPayd}}</span>
    </div>
    <form class="Payment-form" @submit="onPayment">
      <input type="text" v-model.number="coin">
      <button>pay</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      coin: ''
    }
  },

  props: {
    totalPrice: 0,
    alreadyPayd: 0
  },

  methods: {
    onPayment(event) {
      if (event) {
        event.preventDefault()
      }

      this.$emit('payd', this.coin)
    }
  }

}
</script>

<style lang="scss">
.Payment {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  border-radius: 500rem;
  align-items: center;
  padding: 20px 0;
  background-color: rgb(175, 175, 175);
  flex-wrap: wrap;

  &-content {
    width: calc(50% - 20px);
    display: flex;
    justify-content: space-around;
  }

  &-form {
    width: calc(50% - 20px);
  }
}
</style>


