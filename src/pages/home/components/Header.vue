<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont left-icon">&#xe685;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe616;</span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont rigth-icon">&#xe688;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    /*
    mapState 是指将 vuex 中的数据映射到该组件的 computed计算属性 中。

    例：是指将 city 这个公用属性映射到 city 计算属性中
    */
    ...mapState(['city'])
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
    line-height : $height
    background: $bgColor
    color: #fff
    .left-icon
      text-align: center
      font-size: $iconFontSize
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
      min-width: 1.04rem
      padding: 0 .1rem
      float:right
      text-align: center
      color: #fff
      .rigth-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
