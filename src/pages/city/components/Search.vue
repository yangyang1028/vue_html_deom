<template>
  <div>
    <div class="bgcolor">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyworld"
      >
    </div>
    <div class="search-content" ref="search" v-show="keyworld">
      <ul>
        <li class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="cityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyworld: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    cityClick (city) {
      // alert(' ')
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
      // alert(city)
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyworld) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // pc 模拟测试 不滚动， 真机测试 可以滚动
    // 使用mounted 不滚动 ， 使用updated 执行两次，点击出问题
    // console.log('生命钩子')
    // 虚拟DOM重新渲染和修补之前，数据更新之后，会执行两次
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
    // setTimeout(() => {
    // this.scroll = new Bscroll(this.$refs.search)
    // }, 200)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom:0
    background: #eee
    .search-item
      line-height: .64rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
