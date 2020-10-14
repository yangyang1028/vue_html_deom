<template>
  <div>
    <div class="re-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detali/' + item.id" class="re-item" v-for="item of list" :key="item.id">
        <img class="re-img" :src="item.imgURL" />
        <div class="re-txt">
          <p class="re-txt-title">{{item.title}}</p>
          <p class="re-txt-text">{{item.text}}</p>
          <p class="re-span">
            <span>￥</span>
            <span>999</span>
            <span>起</span>
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
 .re-title
   margin-top: .2rem
   line-height: .8rem
   background: #eee
   text-indent: .2rem
  .re-item
    overflow: hidden
    display: flex
    height: 1.9rem
    .re-img
      width: 1.5rem
      height: 1.5rem
      padding: .1rem
    .re-txt
     flex: 1
     padding: .1rem
     min-width: 0
     .re-txt-title
       line-height: .54rem
       font-size: .35rem
       ellipsis()
      .re-txt-text
        display: block
        line-height: .4rem
        color: #999
        ellipsis()
      .re-span
        color: #ff9300
        line-height: .55rem
      .re-span span:nth-child(1)
        font-size: .20rem
      .re-span span:nth-child(2)
        font-size: .40rem
        margin-left: -.1rem
      .re-span span:nth-child(3)
        font-size: .26rem
        color: #ccc
        margin-left: -.06rem
</style>
