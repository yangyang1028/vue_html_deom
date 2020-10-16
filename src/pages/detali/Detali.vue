<template>
  <div>
    <detali-banner></detali-banner>
    <detali-header></detali-header>
    <div class="heightSize"></div>
  </div>
</template>

<script>
import DetaliBanner from './components/banner'
import DetaliHeader from './components/header'
export default {
  name: 'Detali',
  components: {
    DetaliBanner,
    DetaliHeader
  }
}
</script>

<style lang="stylus" scoped>
  .heightSize
    height: 50rem
</style>
