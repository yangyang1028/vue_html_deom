<template>
  <div class="border-list" ref="wrapper">
    <div>
      <div class="ares">
        <div class="title border-topbottom">当前城市</div>
        <div class="city-button">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="ares">
        <div class="title border-topbottom">热门城市</div>
        <div class="city-button">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="ares"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="list border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }, 0)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // 可以让元素滚动到当前element的位置
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .border-list
    overflow: hidden
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eeeeee
      font-size: .26rem
      padding-left: .2rem
      color: #666
    .city-button
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .list
        line-height: .64rem
        color: #666
        padding-left: .2rem
</style>
