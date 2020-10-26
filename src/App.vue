<template>
  <div id="app">
    <!-- keep-alive 表示将首次加载路由中的内容放在缓存中，下次加载路由中的内容时不用在重新加载，从而提高性能
              exclude="Detali" : 表示名字为Detali的组件不会被缓存，每次进入页面，数据都会重新获取
    -->
    <keep-alive exclude="Detali">
      <router-view/>
    </keep-alive>
  </div>
</template>
