<!-- eslint-disable comma-dangle -->
<template>
  <div id="app">
      <h1 @click="clicked = !clicked" :class="{'white': !clicked, 'blue': clicked}">Моя практическая работа Vue.js №1 </h1>
      <p>В ней я учусь работать с API, а также создавать живой поиск!</p>
      <p>Имеется существующий список людей <strong>с разными именами</strong>. Введите любое из имён, чтобы попробовать найти пользователя. Можете начать с моего имени!</p>
      <add-button/>
    </div>
</template>

<script>
import AddButton from './components/AddButton.vue'
export default {
  name: 'App',

  components: {
    AddButton
  },
  methods: {
    testFirst () {
      alert('Hi!')
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
