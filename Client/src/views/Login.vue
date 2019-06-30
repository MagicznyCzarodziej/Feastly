<template>
  <div class="login">
    <div class="login__logo">FEASTLY</div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  components: {
    LoginForm,
  }
}
</script>

<style lang="stylus" scoped>
.login
  text-align center
.login__logo
  margin-top 4rem
  margin-bottom 3rem
  font-size 3rem
</style>
