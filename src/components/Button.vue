<template>
  <button class="Button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script> 

<style lang="scss">
@import '../styles/settings';

.Button {
  background-color: $primary-color;;
  border: 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 1;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 250ms;
  border-radius: 10px;

  &:not(.Form-button, &--smal) {
    padding: 0.75em 1.25em;
  }

  &--small {
    padding: 5px 10px;
    font-size: 10px;
  }
}
</style>


