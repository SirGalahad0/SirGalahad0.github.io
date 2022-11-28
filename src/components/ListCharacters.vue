<template>
    <div class="container">
        <div class="row">
            <div class="d-flex flex-wrap justify-content-center">
                <div class="card text-center pt-4 m-4" style="width: 18rem;" v-for="character in characters" :key="character.id">
                    <img  style="border-radius: 50%" :src="require(`../assets/characters/${character.icon}`)" class="card-img-top mx-auto" alt="icon">
                    <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                        <p class="card-text">{{ character.about }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Элемент: {{ character.element }}</li>
                        <li class="list-group-item">День рождения: {{ character.birthday }}</li>
                        <li class="list-group-item">Вид оружия: {{ character.weapon }}</li>
                    </ul>
                    <div class="card-body d-flex justify-content-center align-items-end">
                        <a href="#" class="card-link">Туториал...</a>
                        <a href="#" class="card-link">Подробнее...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { characters } from '../characters'
export default {
    data() {
        return {
            characters
        }
    },
}
</script>