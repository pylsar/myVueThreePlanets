<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Planets</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
