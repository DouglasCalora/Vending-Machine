<template>
  <div class="Message" :class="messageStyle">
    <h2 class="Message-title">{{ messageTitle }}</h2>
    <p class="Message-description">{{ messageDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    messageTitle: '',
    messageDescription: '',
    messageStyle: ''
  }
  
}
</script>

<style lang="scss">
.Message {
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 30px;

  &--danger {
    background-color: rgba(255, 0, 0, 0.479);
    border-color: red;
  }

  &--success {
    background: rgba(0, 128, 0, 0.479);
    border-color: green;
  }

  &-title {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 5px;
    color: white;
  }

  &-description {
    font-weight: bold;
    text-transform: uppercase;
    color: white
  }
}
</style>


