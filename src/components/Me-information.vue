<template>
  <div class="page has-navbar" v-nav="{title: '个人信息', showBackButton: true}">
    <div class="page-content">
      <div class="list list-ios" thin-border>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-person positive"></i>
              {{menu.name.key}}
            </span>
            <span class="me-information-list-right">{{menu.name.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-image assertive"></i>
              {{menu.photo.key}}
            </span>
            <img src="{{menu.photo.value}}">
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-contacts energized"></i>
              {{menu.gender.key}}
            </span>
            <span class="me-information-list-right">{{menu.gender.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-drafts balanced"></i>
              {{menu.email.key}}
            </span>
            <span class="me-information-list-right">{{menu.email.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-phone-portrait energized"></i>
              {{menu.cellphone.key}}
            </span>
            <span class="me-information-list-right">{{menu.cellphone.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-globe positive"></i>
              {{menu.address.key}}
            </span>
            <span class="me-information-list-right">{{menu.address.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-compass balanced"></i>
              {{menu.school.key}}
            </span>
            <span class="me-information-list-right">{{menu.school.value}}</span>
          </li>
        </ul>
        <ul class="item item-ios" v-for="menu in menus">
          <li>
            <span class="me-information-list-left">
              <i class="icon ion-android-create assertive"></i>
              {{menu.signature.key}}
            </span>
          </li>
          <li>
            <span class="me-information-list-right">{{menu.signature.value}}</span>
          </li>
        </ul>
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
                        name:{
                            key:'用户名',
                            value:'Bugzhang'
                        },
                        photo:{
                            key:'头像',
                            value:''
                        },
                        cellphone:{
                            key:'手机',
                            value:'15675884010'
                        },
                        gender:{
                            key:'性别',
                            value:'男'
                        },
                        email:{
                            key:'邮箱',
                            value:'nuptunee@gmail.com'
                        },
                        school:{
                            key:'学校',
                            value:'中南大学'
                        },
                        address:{
                            key:'地区',
                            value:'湖南 长沙'
                        },
                        signature:{
                            key:'个性签名',
                            value:'头像是我老婆'
                        }
                    }
                ]
            }
        }
    }
</script>
<style>
  .me-information-list-left{
    float: left;
  }

  .me-information-list-right{
    float: right;
    position: relative;
  }

  ul .icon{
    font-size: 16px;
  }
</style>


