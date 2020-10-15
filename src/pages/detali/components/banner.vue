<template>
  <div>
    <div class="banner" @click="swiperOn">
      <img class="banner-img" src="static/img/002.jpg">
      <div class="banner-info">
        <div class="banner-title">著名景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe70a;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="bannerSwiper" @close="swiperOff"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  data () {
    return {
      bannerSwiper: false,
      imgs: ['static/img/002.jpg', 'static/img/003.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    swiperOn () {
      this.bannerSwiper = true
    },
    swiperOff () {
      this.bannerSwiper = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    // 防止页面抖动
    overflow: hidden
    height: 0
    padding-bottom: 50%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
