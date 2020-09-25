<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont left-icon">&#xe685;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe616;</span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    {{this.city}}
    <span class="iconfont rigth-icon">&#xe688;</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<!--
scoped:只对本组件产生作用

lang="stylus":使用stylus编写样式

1 rem = html font-size = 50px
-->

<style lang="stylus" scoped>
@import "~styles/varibles.styl";
  .header
    display: flex
    line-height : .86rem
    background: $bgColor
    color: #fff
    .left-icon
      text-align: center
      font-size: .4rem
    .header-left
      width: .64rem
      float:left
    .header-input
      flex : 1
      height .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .1rem
      background: #ffffff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float:right
      text-align: center
      .rigth-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
