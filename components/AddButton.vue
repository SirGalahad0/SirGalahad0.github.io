<template>
    <div class="app__block">
        <input type="search" placeholder="Введите имя . . ." v-model="name" @keyup.enter="buttonAction" @input="inputStatus">
        <div class="app__tip">
          <template v-if="searchStatus">
            <p v-for="(person) in searchArray" :key="person" @click="searchAccept($event)">{{person.name.toUpperCase()}}</p>
          </template>
        </div>
        <button @click="buttonAction" type="submit">Найти по имени</button>
        <sub class="err" v-if="this.errWrite">Извините, но данного имени нет в списке. Введите корректное имя</sub>
        <sub class="err" v-if="this.errFind">Вы уже ввели это имя. Введите другое имя</sub>
      </div>
      <div class="app__block">
        <h2 v-if="notes.length === 0">Выберите имя для списка</h2>
        <h2 v-else>Выбранные пользователи:</h2>
        <ul class="app__list">
          <li v-for="( person, idx ) in notes" :key="person.id">
            <p>ID: {{ person[0].id}}</p>
            <p>Имя: {{ person[0].name}}</p>
            <p>Возраст: {{ person[0].age}}</p>
            <p>Пол: {{ person[0].gender}}</p>
            <button type="reset" @click="deleteCard(idx, $event)">Удалить</button>
          </li>
        </ul>
      </div>
</template>
<script>
import { persons } from '../data'
export default {
  data () {
    return {
      name: '',
      notes: [],
      usedNames: [],
      searchStatus: false,
      errWrite: false,
      clicked: false,
      errFind: false
    }
  },
  methods: {
    buttonAction () {
      const person = persons.filter(elem => elem.name.toUpperCase() === this.name)
      const findPerson = this.notes.flat().find(elem => elem.name.toUpperCase() === this.name)
      if (findPerson) {
        this.errFind = true
      } else {
        if (person.length !== 0) {
          this.notes.push(person)
          console.log(this.notes)
          this.usedNames.push(person[0].name)
          localStorage.setItem('app-list', JSON.stringify(this.notes))
        } else {
          this.errWrite = true
          this.searchStatus = false
        }
      }
      this.name = ''
      this.searchStatus = false
    },
    inputStatus () {
      this.errWrite = false
      this.errFind = false
      this.name = this.name.toUpperCase()
      this.searchStatus = true
    },
    searchAccept (event) {
      this.name = event.target.innerHTML
      this.searchStatus = false
    },
    deleteCard (idx, event) {
      this.notes.splice(idx, 1)
      this.errFind = false
      this.errWrite = false
      localStorage.setItem('app-list', JSON.stringify(this.notes))
    }
  },
  computed: {
    searchArray () {
      return this.data.filter(elem => elem.name.toUpperCase().includes(this.name))
    }
  },
  created () {
    this.data = persons
    const nameData = localStorage.getItem('app-list')
    if (nameData) { this.notes = JSON.parse(nameData) }
  }
}
</script>
