<template>
  <div class="page has-navbar" v-nav="{title: '编辑个人信息', showBackButton: true}">
    <div class="page-content">
        <div class="item item-divider">
          填写您的基本信息：
        </div>
        <von-input
                type="text"
                :value.sync="username"
                label="用户名"
                placeholder="用户名"
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
                type="text"
                :value.sync="school"
                label="所在院校"
                placeholder="所在院校"
        >
        </von-input>
        <von-input
                type="text"
                :value.sync="signature"
                label="反馈内容"
                placeholder="反馈内容"
        >
        </von-input>
        <md-button class="button button-balanced" @click="clicked()">
          确认提交
        </md-button>
      </div>

  </div>
</template>
<style>
  .page-content .button{
    left: 30%;
    top: 20px;
  }
</style>
<script>
    export default {
        data(){
            return {
                menus: [
                    {
                        name:{
                            key:'用户名（必填）',
                            value:'Bugzhang'
                        },
                        email:{
                            key:'邮箱（必填）',
                            value:'nuptunee@gmail.com'
                        },
                        school:{
                            key:'学校（选填）',
                            value:'中南大学'
                        },

                        feedback:{
                            key:'反馈内容（必填）',
                            value:'反馈内容'
                        },

                        verification:{
                            key:'验证码',
                            value:'验证码'
                        }
                    }
                ],
            }
        }
    }
</script>



