<template>
  <div>
    <form class="login-form" @submit.prevent="handleSubmit">
      <input
        class="login-form__input"
        type="text"
        name="username"
        placeholder="Nazwa użytkownika"
        v-model="username"
        @focus="errors.remove('auth')"
        >
      <input
        class="login-form__input"
        type="password"
        name="password"
        placeholder="Hasło"
        v-model="password"
        @focus="errors.remove('auth')"
      >
      <input type="submit" class="login-form__submit" value=ZALOGUJ>
      <br>
      <router-link to="register" class="login-form__register">Nie mam jeszcze konta</router-link>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await AuthService.login({
          username: this.username,
          password: this.password,
        });

        const { user } = response.data.data;
        localStorage.setItem('auth_token', user.token);
        localStorage.setItem('username', user.username);
        this.$store.dispatch('login', user.username);
        this.username = null;
        this.password = null;
        this.$router.push('/');
      } catch (error) {
        const { code } = error.response.data.error;
        console.error(code);

        switch (code) {
          case 'USERNAME_OR_PASSWORD_INVALID':
            this.errors.add({
              field: 'auth',
              msg: 'Nieprawidłowa nazwa uzytkownika lub hasło',
            });
            break;
          case 'FIELDS_VALIDATION_ERROR':
            this.errors.add({
              field: 'auth',
              msg: 'Podaj nazwę użytkownika i hasło',
            });
            break;
          default:
            this.errors.add({
              field: 'auth',
              msg: 'Nieoczekiwany błąd',
            });
            break;
        }
      }
    },
  },
  inject: ['$validator'],
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.login-form
  text-align center
  font-size 1.4rem
.login-form__label
  display block
  margin-top 1rem
.login-form__input
  display block
  max-width 15rem
  margin-top 1.4rem
  padding-bottom 0.2rem
  font-size 1.4rem
  font-family fMain
  text-align center
  color cLight
  margin-right auto
  margin-left auto
  background none
  border none
  border-bottom 0.05rem solid cLight
  &::placeholder
    font-size 1.2rem
  &:focus
    outline none
    box-shadow 0 0.4rem 0.3rem -0.3rem rgba(255, 255, 255, 0.3)
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus
    caret-color white
    -webkit-text-fill-color: cLight;
    -webkit-box-shadow: 0 0 0px 30px cDark inset;
    transition: background-color 5000s ease-in-out 0s;
.login-form__submit
  margin-top 1.4rem
  background-color transparent
  border none
  font-size 1.4rem
  font-family fMain
  text-align center
  color cLight
  cursor pointer
  user-select none
  transition-duration 0.1s
  &:focus
    outline none
  &:active
    transform translateY(-0.2rem)
.login-form__register
  display inline-block
  margin-top 2rem
  color cLight
  font-size 0.8rem
</style>
