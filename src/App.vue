<template>
  <header class="container mt-3 header">
    <div class="row">
      <div class="d-flex justify-content-between align-items-center">
        <p class="header__title">Genshin Impact<span> туториал</span></p>
        <button class="btn btn-danger" @click="clearData">Сброс данных</button>
        <p v-if="!regStatus">Пройдите авторизацию на сайте</p>
        <p v-else>Добро пожаловать, {{this.formReg.name}}!</p>
      </div>
      <nav class="navbar navbar-expand-lg bg-light my-4" v-if="regStatus">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Панель навигации</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="main">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery">Галерея персонажей</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="chats">Чат</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="mypage">Личный кабинет</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <login-page @register-user="changeRegStatus" v-if="!regStatus"></login-page>
  <chat-page id="chats" v-else></chat-page>
  <list-characters id="characters"></list-characters>
  <my-page id="mypage"></my-page>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import MyPage from './components/MyPage.vue'
import ListCharacters from './components/ListCharacters.vue'
import ChatPage from './components/ChatPage.vue'
export default {
  components: {
    LoginPage,
    MyPage,
    ListCharacters,
    ChatPage
  },
  data() {
    return {
      regStatus: true,
      formReg: []
    }
  },
  methods: {
    clearData () {
      localStorage.clear()
      this.regStatus = false
      window.location.reload()
    },
    changeRegStatus () {
      this.regStatus = true
    }
  },
  created () {
    this.formReg = JSON.parse(localStorage.getItem('userData'))
  }
}
</script>

<style src="./styles/style.scss" lang="scss"></style>