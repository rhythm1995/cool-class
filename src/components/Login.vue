<template>
    <div class="page has-navbar" v-nav="{title: '登录', showBackButton: true}">
        <div class="page-content padding-top">
            <von-input
                    type="tel"
                    :value.sync="cellphone"
                    placeholder="请输入手机号码/电子邮箱作为账号"
                    label="手机号码/电子邮箱："
                    floating-label="true">
            </von-input>
            <von-input
                    type="text"
                    :value.sync="password"
                    placeholder="请输入你的密码"
                    label="密码："
                    floating-label="true">
            </von-input>
            <von-input
                    type="text"
                    :value.sync="verificationCode"
                    placeholder="请输入如图所示验证码"
                    label="验证码："
                    floating-label="true">
            </von-input>
            <div>
                <md-button class="button button-balanced" @click="clicked()">
                    登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                </md-button>
            </div>
            <div>
                <md-button class="button button-calm" @click="clicked()">
                    注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
                </md-button>
            </div>
            <div>
                <md-button class="button button-energized " @click="clicked()">
                    忘记密码
                </md-button>
            </div>


        </div>
    </div>
</template>
<style>
    .button{
        margin: auto;
        text-align: center;
        margin-top: 10px;
    }
    .button-balanced{
        padding-left: 30%;
        padding-right: 30%;
    }

    .button-energized{
        padding-left: 30%;
        padding-right: 30%;
    }

    .button-calm{
        padding-left: 30%;
        padding-right: 30%;
    }


</style>