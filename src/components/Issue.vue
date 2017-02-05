<template>
    <div class="page has-navbar" v-nav="{title: '发布', showBackButton: true}">
        <div class="page-content padding-top">
            <div class="item item-divider">发布一个需求:</div>
            <von-input
                    type="text"
                    :value.sync="issueName"
                    placeholder="请输入需求名称"
                    label="需求名称："
                    floating-label="true">
            </von-input>
            <von-input
                    type="text"
                    :value.sync="issueMoney"
                    placeholder="请输入雇佣金额"
                    label="雇佣金额："
                    floating-label="true">
            </von-input>
            <von-input
                    type="text"
                    :value.sync="issueTime"
                    placeholder="请输入雇佣时间"
                    label="雇佣金额："
                    floating-label="true">
            </von-input>
            <von-input
                    type="text"
                    :value.sync="issueDescription"
                    placeholder="请输入需求描述"
                    label="雇佣金额："
                    floating-label="true">
            </von-input>
            <div>
                <div class="item item-divider">
                    选择需求类型:
                </div>
                <von-radio :options="requireOptions" :value.sync="require"></von-radio>
            </div>

            <md-button class="button button-positive" @click="clicked()">
                确认发布
            </md-button>
        </div>
    </div>
</template>
<style>
    .button-positive{
        margin-left: 5%;
    }
</style>
<script>
    export default{
        data(){
            return {
                issueName: '',
                issueMoney: '',
                issueDescription: '',
                require: 0,
                requireOptions: ["找代课", "找家教"],
            }
        }
    }
</script>