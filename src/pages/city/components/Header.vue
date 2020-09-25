<template>
  <div class="header">
    <div>国内地区</div>
    <router-link to="/">
      <div class="iconfont header-city">&#xe685;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    position: relative
    overflow: hidden
    line-height: $height
    background: $bgColor
    color: #ffffff
    text-align: center
    font-size: .32rem
    .header-city
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: $iconFontSize
      color: #fff
</style>
