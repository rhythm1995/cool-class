<template>
  <div class="page has-navbar" v-nav="{ title: '主页' }">
    <div class="page-content">
      <div class="header-bar">
        <cells :items="entrances" :on-cell-click="onCellClick" row="1" col="4" outerBorder="ture"></cells>
      </div>
      <div class="list list-ios" thin-border>
        <div class="list list-ios" thin-border>
          <div class="item item-avatar item-ios">
            <div class="title">
              带上数电课
            </div>
            <div class="item-note">
              bugzhang
            </div>
            <div class="item-note-money">
              ￥50
            </div>
            <span class="item-note-state">
            <i>正在招募</i>
          </span>
          </div>
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
        data() {
            return {
                entrances: [
                    '<div class="entrance assertive"><span class="icon ion-ios-search"></span><br><span class="icon-name">找代课</span></div>',
                    '<div class="entrance energized"><span class="icon ion-android-contacts"></span><br><span class="icon-name">去代课</span></div>',
                    '<div class="entrance balanced"><span class="icon ion-ios-location"></span><br><span class="icon-name">找家教</span></div>',
                    '<div class="entrance positive"><span class="icon ion-android-contact"></span><br><span class="icon-name">做家教</span></div>'
                ],
                menus: [
                    {
                        iconOn: 'ion-ios-home',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/advanced/tabbar/home'
                    },
                    {
                        iconOn: 'ion-ios-upload',
                        iconOff: 'ion-ios-upload-outline',
                        text: '发布',
                        path: '/advanced/tabbar/discount'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/advanced/tabbar/user'
                    }
                ]
            }
        }
    }
</script>
<style>
  h2{
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar{
    padding-top: 40px;
  }

  .icon{
    font-size: 30px;
  }

  .icon-name{
    font-size: 12px;
  }

  .item-note-state{
    background-color: #44CC00;
    border-radius:2px
  }

  .item-note-state i{
    font-size: 9px;
  }
</style>
