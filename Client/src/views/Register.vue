<template>
  <div class="register">
    <Error />
    <div class="register__logo">FEASTLY</div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';
import Error from '@/components/Error';

export default {
  components: {
    RegisterForm,
    Error,
  },
};
</script>

<style lang="stylus" scoped>
.register
  text-align center
.register__logo
  margin-top 4rem
  margin-bottom 3rem
  font-size 3rem
</style>
