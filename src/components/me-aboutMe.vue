<template>
  <div class="page has-navbar" v-nav="{title: '关于我们', showBackButton: true}">
    <div class="page-content">
      <div class="me-aboutMe-header">
        <p class="header-topic">关于酷课，关于我们</p>
        <p class="header-small-topic">Nero.Yang，Bugzhang，Justzht</p>
      </div>
      <div class="me-aboutMe-content">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酷课起先诞生于一个玩笑中，因为Justzht与我曾经因为翘课被教（PI）育(DOU)，又考虑到大四整一年将不准备呆在学校，所以萌生出开发一款代课应用的想法。17年春节后我们有两周闲暇的时间，于是完成了初步开发。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目主要采用java+mysql+vue.js构建，然后通过原生封装做出的混合应用。我们使用了自己开发的一套SOA分布式框架Kitten，这个框架开源在：https://github.com/nerososft/kitten。前端项目开源在：https://github.com/rhythm1995/cool-class。如果你喜欢我们的应用希望能给予star，使用过程有bug请提出issue，我们会尽快修改。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望大家能喜欢。</p>
        <div class="me-aboutMe-content-right">
          <p>后端开发：Nero.Yang</p>
          <p>前端开发：Bugzhang</p>
          <p>移动端开发：Justzht</p>
        </div>
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

  .me-aboutMe-content{
    margin-top: 20px;
  }
  .me-aboutMe-content p{
    margin-left: 10%;
    margin-right: 10%;
    color: #555;
  }

  .me-aboutMe-content-right{
    float: right;
    margin-right: 10%;
  }
</style>