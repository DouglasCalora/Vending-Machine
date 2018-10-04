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
.Coins {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0;
  border: 1px solid blue;
  padding: 30px 0;
  border-radius: 10px;

  &-title {
    // color: $primary-color;
    color: blue;
    width: 100%;
    text-align: center;
    margin: 0 0 10px;
  }

  &-coin {
    width: 50px;
    height: 50px;
    border-radius: 500rem;
    // background-color: $white;
    position: relative;
    border: 2px solid blue;
    margin: 0 10px;
  }

  &-coinItem {
    width: 28px;
    height: 18px;
    position: absolute;
    top: calc(50% - 9px);
    left: calc(50% - 14px);
    color: blue;
    font-weight: bold;
  }
}

</style>
