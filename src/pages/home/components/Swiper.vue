<template>
<div class="swiper-div">
   <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgURL" /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图上的圆点
        pagination: '.swiper-pagination',
        // 轮播插件是否开启轮播
        loop: true,
        // disableOnInteraction: false,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// >>> :表示穿透，swiper-div下的所有子组件中有该class属性的全部改变
  .swiper-div >>> .swiper-pagination-bullet-active
    background: #fff
// width:100% height: 50.70vm (浏览器兼容会出问题)
// 兼容写法
  .swiper-div
    overflow: hidden
    width: 100%
    height: 0
    background: #ccc
    padding-bottom: 50.70%
    .swiper-img
      width: 100%
</style>
