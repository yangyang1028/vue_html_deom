<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.imgURL" />
          </div>
          <p class="icon-text">{{item.imgText}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // 以下算法是将数组转换为二维数组
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      float: left
      overflow: hidden
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        width: 100%
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-text
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        padding-left: .1rem
        text-align: center
        color: $textColr
        ellipsis()
</style>
