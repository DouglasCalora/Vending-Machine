<template>
  <div class="Payment">
    <div class="Payment-content">
      <span class="Payment-item">Valor total: {{totalPrice}}</span>
      <span class="Payment-item">Valor pago: {{alreadyPayd}}</span>
    </div>
    <form class="Payment-form" @submit="onPayment">
      <input type="text" v-model.number="coin">
      <button class="Button Button--small Payment-button">pay</button>
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
@import '../styles/settings';

.Payment {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  border-radius: 500rem;
  align-items: center;
  padding: 20px 0;
  background-color: $primary-color;
  flex-wrap: wrap;

  &-content {
    width: calc(50% - 20px);
    display: flex;
    justify-content: space-around;
  }

  &-item {
    color: $white;
  }

  &-form {
    width: calc(50% - 20px);
  }

  &-button {
    background-color: $white;
    color: $primary-color;
  }
}
</style>


