<template>
  <div class="bgcolor">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .bgcolor
    background: $bgColor
    height: .74rem
    padding: 0 .2rem
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      width: 100%
      line-height: .64rem
      text-align: center
      color: #666
      border-radius: .06rem
</style>
