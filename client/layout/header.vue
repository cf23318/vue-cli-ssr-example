<template>
  <header :class="$style.mainHeader" class="test">
    <h1>JTodo</h1>
  </header>
</template>

<style lang="stylus" module>
.scoped {}
.module {}
.main-header{
  text-align center
  h1{
    font-size 100px
    color: rgba(175, 47, 47, 0.4)
    font-weight 100
    margin 20px
  }
}
</style>

<style scoped>
.test {
  color: red;
}
</style>
