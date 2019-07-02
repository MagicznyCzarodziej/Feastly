<template>
  <div>
    <form class="register-form" @submit.prevent="handleSubmit">
      <input
        class="register-form__input"
        type="text"
        name="username"
        placeholder="Nazwa użytkownika"
        v-model="username"
        v-validate="'required|alpha_num|min:6'"
      >
      <input
        class="register-form__input"
        type="password"
        name="password"
        placeholder="Hasło"
        v-model="password"
        v-validate="'required|alpha_num|min:6'"
      >
      <input type="submit"
        class="register-form__submit"
        value="ZAŁÓŻ KONTO"
        :disabled="errors.any()"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    handleSubmit() {

    },
  },
  inject: ['$validator'],
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.register-form
  text-align center
  font-size 1.4rem
.register-form__label
  display block
  margin-top 1rem
.register-form__input
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
.register-form__submit
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
</style>
