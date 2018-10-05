<template>
  <form class="Form Form--search" @submit="onSearch">
    <div class="Form-field">
      <label for="" class="Form-label">Pesquisar Produto</label>
      <input type="text" class="Form-text inputSearch" placeholder="Procurar pelo código do produto" v-model="term">
      <btn-button class="Form-button">Pesquisar</btn-button>
    </div>
  </form>
</template>

<script>
import Button from './Button'

export default {
  components: {
    'btn-button': Button
  },

  data() {
    return {
      term: ''
    }
  },

  methods: {
    onSearch (event) {
      if (event) {
        event.preventDefault()
      }

      this.$emit('searched', this.term)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/settings';

.Form {
  $root: &;

  margin: 50px 0;

  &--search {
    text-align: center;
    font-size: 20px;
    color: $primary-color;;

    #{$root}-text {
      max-width: 400px;
    }
  }

  &--pay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 300px;

    #{$root}-field {
      max-width: 100px;
    }

    #{$root}-actionButton {
      margin-left: 30px;
      padding: 4px;
    }
  }

  &-field {
    width: 100%;
  }

  &-label {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }

  &-text {
    outline: 0;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgb(59, 57, 57);
    transition: border 500ms;

    &:focus {
      border-color: $primary-color;;
    }
  }

  &-button {
    border-radius: 500rem;
    padding: 0.5em 1em;
    text-transform: lowercase;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    &--search {
      #{$root}-text {
        max-width: 200px;
      }
    }
  }
}
</style>


