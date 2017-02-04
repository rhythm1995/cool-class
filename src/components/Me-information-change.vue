<template>
  <div class="page has-navbar" v-nav="{title: '编辑个人信息', showBackButton: true}">
    <div class="page-content">
      <von-input
              type="text"
              :value.sync="username"
              label="用户名"
              placeholder="用户名"
      >
      </von-input>
      <von-input
              type="password"
              :value.sync="password"
              label="密码"
              placeholder="密码"
      >
      </von-input>
      <von-input
              type="email"
              :value.sync="email"
              label="E-mail"
              placeholder="E-mail"
      >
      </von-input>
      <von-input
              type="tel"
              :value.sync="tel"
              label="手机号"
              placeholder="手机号"
      >
      </von-input>

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
                        photo:{
                            key:'头像',
                            value:''
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

</style>


