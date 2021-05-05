<template>
  <div id="app">
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
body{
  overflow: hidden;
}
#app{
  color: white;
  background: black;
}
.page-enter-active, .page-leave-active{
  transition: all .5s ease;
  opacity: 0;
}
.page-enter, .page-leave-to{
  transition: all .5s ease;
  opacity: 0;
}
</style>
