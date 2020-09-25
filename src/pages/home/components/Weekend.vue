<template>
  <div>
    <div class="re-title">周末畅游</div>
    <ul>
      <li class="re-item" v-for="item of list" :key="item.id">
        <div class="re-img-wrppor">
          <img class="re-img" :src="item.imgURL" />
        </div>
        <div class="re-txt">
          <p class="re-txt-title">{{item.title}}</p>
          <p class="re-txt-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
 .re-title
   line-height: .8rem
   background: #eee
   text-indent: .2rem
  .re-img-wrppor
    overflow: hidden
    height: 0
    padding-bottom: 56.25%
    .re-img
      width: 100%
  .re-txt
    padding: .1rem
    .re-txt-title
      line-height: .54rem
      font-size: .35rem
      ellipsis()
    .re-txt-text
      display: block
      line-height: .4rem
      color: #999
      ellipsis()
</style>
