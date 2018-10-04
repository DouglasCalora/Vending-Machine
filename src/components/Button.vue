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
.Button {
  background-color: blue;
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
  border-radius: 500rem;

  &:not(.Form-button, &--smal) {
    padding: 0.75em 1.25em;
    text-transform: uppercase
  }

  &--small {
    padding: 0.5em 1em;
  }
}
</style>


