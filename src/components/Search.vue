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

  </div>
</template>
<script>
    export default{
        data(){
            return {
                keywords: '',
                searching: false,
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

<style>
  .page-content{
    margin-top: 0;
  }
</style>