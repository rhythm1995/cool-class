<template>
  <div class="page has-navbar" v-nav="{title: '关于我们', showBackButton: true}">
    <div class="page-content">
      <div class="me-help-header">
        <p class="header-topic">常见问题</p>
      </div>
      <div class="me-help-content">
        <span>q：</span>
        <span>a:</span>
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
  .me-help-header{
    background-color: #3f51b5;
    height:100px;
  }
</style>