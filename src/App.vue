<template>
  <div id="app">
    <!-- keep-alive 表示将首次加载路由中的内容放在缓存中，
               下次加载路由中的内容时不用在重新加载，从而提高性能 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
