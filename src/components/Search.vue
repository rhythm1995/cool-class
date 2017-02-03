<template>
  <div class="page-content">
    <search
            :value.sync="keywords"
            placeholder="输入关键字"
            :on-search="onSearch"
            :clear-search="clearSearch"
    ></search>

    <div class="item" v-show="searching">
      searching for '{{keywords}}'.
    </div>
    <div v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                keywords: '',
                searching: false,

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
        },
        methods: {
            onSearch(keywords) {
                this.searching = true;
            },
            clearSearch() {
                this.searching = false;
                this.keywords = ''
            }
        }
    }
</script>