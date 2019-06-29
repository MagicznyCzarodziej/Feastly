<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addSource">Dodaj źródło</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
*
  box-sizing border-box
html
  font-size 20px
</style>
