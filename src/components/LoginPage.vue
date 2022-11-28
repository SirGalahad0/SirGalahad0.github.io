<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-6 mx-auto">
                <form novalidate>
                    <div class="register-block" v-show="this.stage === 1">
                        <div class="form-visual d-flex align-items-center">
                            <img src="../assets/HuTao2.png" alt="HuTao">
                            <p>Добро пожаловать на наш портал Genshin Impact туториал!<br>Пройдите регистрацию для доступа в сайт</p>
                        </div>
                        <div class="mb-3 mt-4">
                            <label class="form-label">Ваше имя</label>
                            <input type="text" class="form-control" @blur="$v.formReg.name.$touch()" :class="{ 'form-control is-invalid': $v.formReg.name.$error || $v.formReg.name.alpha.$invalid, 'form-control is-valid': !$v.formReg.name.required.$invalid}" v-model="formReg.name">
                            <div class="invalid-feedback" v-if="$v.formReg.name.required.$invalid">Это обязательное поле для заполнения</div>
                            <div class="invalid-feedback" v-if="$v.formReg.name.alpha.$invalid">Имя может содержать лишь буквы</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ваша фамилия</label>
                            <input type="text" class="form-control" @blur="$v.formReg.surname.$touch()" :class="{ 'form-control is-invalid': $v.formReg.surname.$error || $v.formReg.surname.alpha.$invalid, 'form-control is-valid': !$v.formReg.surname.$error && !$v.formReg.surname.required.$invalid }" v-model="formReg.surname">
                            <div class="invalid-feedback" v-if="$v.formReg.surname.required.$invalid">Это обязательное поле для заполнения</div>
                            <div class="invalid-feedback" v-if="$v.formReg.surname.alpha.$invalid">Имя может содержать лишь буквы</div>
                        </div>
                        <button type="button" class="btn btn-primary" :disabled="$v.formReg.name.required.$invalid || $v.formReg.name.alpha.$invalid  || $v.formReg.surname.required.$invalid || $v.formReg.surname.alpha.$invalid" @click="nextStage">Далее</button>
                    </div>
                    <transition name="slide-fade">
                        <div class="register-block" v-show="this.stage === 2">
                            <div class="mb-3">
                                <label class="form-label">Ваша почта</label>
                                <input type="email" class="form-control" @blur="$v.formReg.email.$touch()" :class="{ 'form-control is-invalid': $v.formReg.email.$error, 'form-control is-valid': !$v.formReg.email.email.$invalid && !$v.formReg.email.required.$invalid}" v-model="formReg.email">
                                <div class="invalid-feedback" v-if="$v.formReg.email.required.$invalid">Это обязательное поле для заполнения</div>
                                <div class="invalid-feedback" v-if="$v.formReg.email.$invalid">Поле должно быть email-адресом: <strong>email@test.com</strong></div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ваш пароль</label>
                                <input type="password" class="form-control" @blur="$v.formReg.password.$touch()" :class="{ 'form-control is-invalid': $v.formReg.password.$error, 'form-control is-valid': !$v.formReg.password.minLength.$invalid && !$v.formReg.password.required.$invalid}" v-model="formReg.password">
                                <div class="invalid-feedback" v-if="$v.formReg.password.required.$invalid">Это обязательное поле для заполнения</div>
                                <div class="invalid-feedback" v-if="$v.formReg.password.minLength">Пароль должен состоять минимум из 6 символов</div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Подтверждение пароля</label>
                                <input type="password" class="form-control" @blur="$v.confirmPassword.$touch()" :class="{ 'form-control is-invalid': $v.confirmPassword.$error, 'form-control is-valid': $v.confirmPassword.sameAs && confirmPassword !== ''}" v-model="confirmPassword">
                                <div class="invalid-feedback" v-if="$v.confirmPassword.$error">Пароли не совпадают. Попробуйте ещё раз</div>
                            </div>
                            <button type="button" class="btn btn-light mx-2" @click="prevStage">Назад</button>
                            <button type="button" class="btn btn-primary" :disabled="$v.formReg.email.required.$invalid || $v.formReg.email.email.$invalid || $v.formReg.password.required.$invalid || $v.formReg.password.minLength.$invalid || $v.confirmPassword.$error || confirmPassword === '' " @click="nextStage() ; validateDate()">Далее</button>
                        </div>
                    </transition>
                    <transition name="slide-fade">
                        <div class="register-block" v-show="this.stage === 3">
                            <div class="mb-3">
                                <label class="form-label">Дата рождения</label>
                                <input type="date" class="form-control" id="formDate" v-model="formReg.date" :class="{ 'form-control is-valid': !$v.formReg.date.required.$invalid } ">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Город</label>
                                <input class="form-control" list="datalistOptions" id="exampleDataList" v-model="formReg.place">
                                <div class="form-text">*Это необязательное поле для заполнения</div>
                                <datalist id="datalistOptions">
                                    <option value="Г.Москва"></option>
                                    <option value="Г.Санкт-Петербург"></option>
                                    <option value="Г.Севастополь"></option>
                                    <option value="Г.Киев"></option>
                                    <option value="Г.Днепр"></option>
                                    <option value="Г.Берлин"></option>
                                    <option value="Г.Лондон"></option>
                                    <option value="Г.Вашингтон"></option>
                                </datalist>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">О себе</label>
                                <textarea class="form-control" placeholder="Расскажите о своих увлечениях" v-model="formReg.about"></textarea>
                                <div class="form-text">*Это необязательное поле для заполнения</div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" v-model="checkedForm">
                                <label class="form-check-label">Я подтверждаю указанную мною информацию и <span>ознакомлен с политикой конфиденциальных данных</span></label>
                                <label class="form-check-label">Уверен в своём намерении быть <span>хорошим и добрым человеком</span> во время пребывания на сайте</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input">
                                <label class="form-check-label">Уверен в своём намерении быть <span>хорошим и добрым человеком</span> во время пребывания на сайте</label>
                            </div>
                            <button type="button" class="btn btn-light mx-2" @click="prevStage">Назад</button>
                            <button type="submit" ref="" class="btn btn-primary" :disabled="$v.formReg.date.required.$invalid || checkedForm === false" @click="registerUser">Отправить</button>
                        </div>
                    </transition>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'
const alpha = helpers.regex(/^[a-zA-Zа-яёА-ЯЁ]*$/)
export default ({
    setup () {
        return { $v: useVuelidate() }
  },
    data () {
        return {
            formReg: {
                name: '',
                surname: '',
                email: '',
                password: '',
                date: '',
                place: '',
                about: '',
            },
            confirmPassword: '',
            stage: 1,
            MAX_STAGE: 3,
            MIN_STAGE: 1,
            MIN_PASSWORD_LENGTH: 6,
            checkedForm: false
        }
    },
    validations () {
        return {
            formReg: {
                name: { required, alpha },
                surname: { required, alpha },
                email: { required, email },
                password: { required, minLength: minLength(this.MIN_PASSWORD_LENGTH) },
                date: { required }
            },
            confirmPassword: { sameAs: sameAs(this.formReg.password) }
      }
    },
    methods: {
        nextStage () { if (this.stage < this.MAX_STAGE) { return this.stage++ } },
        prevStage () { if (this.stage > this.MIN_STAGE) { return this.stage-- } },
        validateDate () {
            let currentDate = new Date(),
            CURRENT_YEAR = currentDate.getFullYear(),
            CURRENT_MONTH = currentDate.getMonth() + 1,
            CURRENT_DAY = currentDate.getDate(),
            MIN_DATE_YEAR = CURRENT_YEAR - 80,
            minDate = `${MIN_DATE_YEAR}-01-01`,
            maxDate = `${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`,
            date = document.getElementById('formDate')

            date.setAttribute('min', minDate)
            date.setAttribute('max', maxDate)
        },
        registerUser () { 
            localStorage.setItem('userData', JSON.stringify(this.formReg))
            this.$emit('register-user', this.regStatus = false)
        }
    }
})
</script>
