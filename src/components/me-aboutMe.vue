<template>
  <div class="page has-navbar" v-nav="{title: '关于酷课与我们', showBackButton: true}">
    <div class="page-content">
      <div class="me-aboutMe-header">
        <h3>关于酷客，关于开发者</h3>
        <h5>——by Nero.Yang，Bugzhang，Justzht</h5>
      </div>
      <div class="me-aboutMe-content">
        <p>Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js component and expose a simple Web-Component-like interface.</p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style>
  .page-content{
    background-color: #fff;
    margin: 30px auto;
    position: relative;
    font-family: Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .me-aboutMe-header{
    background-color: #3f51b5;
    height:100px;
  }

</style>