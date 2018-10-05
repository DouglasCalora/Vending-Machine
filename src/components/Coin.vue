<template>
  <div class="Coins">
    <h2 class="Coins-title">{{ titleCoin }}</h2>
    <div class="Coins-coin" v-for="coin of coins" :key="coin">
      <span class="Coins-coinItem">{{coin}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleCoin: 'Moedas Aceitas',
      coins: [5, 10,  25, 50, 100]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/settings';

.Coins {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0;
  border: 1px solid $primary-color;
  padding: 30px 0;
  border-radius: 10px;
  background-color: lighten($primary-color, 60%);

  &-title {
    color: $primary-color;
    color: $primary-color;
    width: 100%;
    text-align: center;
    margin: 0 0 10px;
  }

  &-coin {
    width: 50px;
    height: 50px;
    border-radius: 500rem;
    background-color: $white;
    position: relative;
    border: 2px solid $primary-color;
    margin: 0 10px;
  }

  &-coinItem {
    width: 28px;
    height: 18px;
    position: absolute;
    top: calc(50% - 9px);
    left: calc(50% - 14px);
    color: $primary-color;
    font-weight: bold;
    text-align: center;
  }
}

</style>
