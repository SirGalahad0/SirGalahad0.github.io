<template>
    <div class="container px-5">
        <div class="wrapper">
            <div class="bg-light border page-body">
                <h2 class="text-end p-2">Личный кабинет</h2>
                <div class="container d-flex justify-content-around mt-4 py-2 test-page">
                    <div class="row">
                        <div class="col">
                            <h3>Основные данные</h3>
                            <p>Имя: {{curUserData.name}}</p>
                            <p>Фамилия: {{curUserData.surname}}</p>
                            <p>Дата рождения: {{curUserData.date}}</p>
                            <p>Место проживания: {{curUserData.place}}</p>
                            <p>О себе: {{curUserData.about}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h2>Данные от аккаунта</h2>
                            <p>Почта: {{curUserData.email}}</p>
                            <p>Пароль: {{curUserData.password}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            curUserData: []
        }
    },
    created() {
        this.curUserData = JSON.parse(localStorage.getItem('userData'))
    },
}
</script>
<style src="../styles/my-page.scss" lang="scss"></style>