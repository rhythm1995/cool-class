<template>
  <div class="page has-navbar" v-nav="{title: '个人信息', showBackButton: true}">
    <div class="page-content">
      <div class="list list-ios" thin-border>
        <div class="item item-ios">
          <p>{{name.key}}</p>
          <p></p>
        </div>
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
                            key:'昵称',
                            value:'Bugzhang'
                        },
                        email:{
                            key:'邮箱',
                            value:'nuptunee@gmail.com'
                        },
                        photo:{
                            key:'头像',
                            value:''
                        },
                        gender:{
                            key:'性别',
                            value:'男'
                        },
                        school:{
                            key:'学校',
                            value:'csu'
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


