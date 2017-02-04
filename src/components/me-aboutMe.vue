<template>
  <div class="page has-navbar" v-nav="{title: '关于我们', showBackButton: true}">
    <div class="page-content">
      <div class="me-aboutMe-header">
        <p class="header-topic">关于酷客，关于我们</p>
        <p class="header-small-topic">Nero.Yang，Bugzhang，Justzht</p>
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
    margin-top: 0;
    position: relative;
    font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: 100;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .page-content .header-topic{
    padding-top: 20px;
    font-size: 32px;
    padding-left: 5%;
    padding-right: 5%;
    line-height:40px;
  }

  .page-content .header-small-topic{
    float: right;
    font-size: 14px;
    padding-left: 5%;
    padding-right: 5%;
    line-height:40px;
  }

  .me-aboutMe-header{
    background-color: #3f51b5;
    height:125px;
  }

  .me-aboutMe-content p{
    color: #222;
  }
</style>