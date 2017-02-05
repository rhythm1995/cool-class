<template>
  <div class="page has-navbar" v-nav="{title: '我', showBackButton: true}">
    <div class="page-content">
      <div class="list list-ios" thin-border>
        <div class="item item-avatar item-ios">
          <div class="title">
            Bugzhang
          </div>
          <div class="item-note">
            我是白痴
          </div>
        </div>
      </div>

      <div class="about-list">
        <div class="item item-icon-left thin-border item-icon-right">
          <p>个人信息</p>
          <i class="icon ion-person balanced icon-left"></i>
          <i class="icon ion-person balanced icon-left"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-left thin-border item-icon-right">
          <p>我的消息</p>
          <i class="icon ion-chatbubble energized icon-left"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-left thin-border item-icon-right">
          <p>帮助</p>
          <i class="icon ion-help-circled calm icon-left"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-left thin-border item-icon-right">
          <p>反馈</p>
          <i class="icon ion-reply assertive icon-left"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-left thin-border item-icon-right">
          <p>关于我们</p>
          <i class="icon ion-information-circled positive  icon-left"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
      </div>

      <div v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                menus: [
                    {
                        iconOn: 'ion-ios-home',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/'
                    },
                    {
                        iconOn: 'ion-ios-upload',
                        iconOff: 'ion-ios-upload-outline',
                        text: '发布',
                        path: '/issue'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/me'
                    }
                ]
            }
        }
    }
</script>
<style>
  .about-list{
    margin-top: -15px;
  }

  .about-list .icon-left{
    filter:alpha(opacity=85);
    -moz-opacity:0.85;
    opacity: 0.85;
  }

  .about-list p{
    margin-top: 2px;
  }

  .page-content{
    margin-top: 0;
  }
</style>