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
import store from '@/store';

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
  beforeRouteEnter(to, from, next) {
    if (store.getters.isLoggedIn) next('/');
    next();
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
