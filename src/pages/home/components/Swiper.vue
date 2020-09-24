<template>
<div class="swiper-div">
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgURL" /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 轮播图上的圆点
        pagination: '.swiper-pagination',
        // 轮播插件是否开启轮播
        loop: true
      },
      swiperList: [{
        id: '001',
        imgURL: require('@img/001.jpg')
      }, {
        id: '002',
        imgURL: require('@img/002.jpg')
      }, {
        id: '003',
        imgURL: require('@img/003.jpg')
      }, {
        id: '004',
        imgURL: require('@img/004.jpg')
      }]
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
