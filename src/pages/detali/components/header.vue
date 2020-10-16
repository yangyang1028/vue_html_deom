<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe685;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-city">&#xe685;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetaliHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollClick () {
      const top = document.documentElement.scrollTop
      // console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollClick)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    line-height: $height
    background: $bgColor
    color: #ffffff
    text-align: center
    font-size: .32rem
    .header-fixed-city
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: $iconFontSize
      color: #fff
</style>
