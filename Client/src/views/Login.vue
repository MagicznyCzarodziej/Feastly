<template>
  <div class="login">
    <Error />
    <div class="login__logo">FEASTLY</div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';
import Error from '@/components/Error';

export default {
  components: {
    LoginForm,
    Error,
  },
  provide() {
    return {
      $validator: this.$validator,
    };
  },
};
</script>

<style lang="stylus" scoped>
.login
  text-align center
.login__logo
  margin-top 4rem
  margin-bottom 3rem
  font-size 3rem
</style>
