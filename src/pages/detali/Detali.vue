<template>
  <div>
    <detali-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detali-banner>
    <detali-header></detali-header>
    <div class="contentList">
      <detali-list :list="list"></detali-list>
    </div>
  </div>
</template>

<script>
import DetaliBanner from './components/banner'
import DetaliHeader from './components/header'
import DetaliList from './components/list'
import axios from 'axios'
export default {
  name: 'Detali',
  components: {
    DetaliBanner,
    DetaliHeader,
    DetaliList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetaliInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDataSucc)
    },
    getDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetaliInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .contentList
    height: 50rem
</style>
