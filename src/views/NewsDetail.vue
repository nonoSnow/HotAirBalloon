<template>
  <div>
    <!-- 新闻详情 -->
    <div class="detail">
      <div style="margin-top:10px;margin-bottom:10px;">
        <el-card shadow="hover">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/newslist">热气球动态</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{data.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
      </div>
      <div class="title">
        <span style="color:#333;font-size:30px;">{{data.title}}</span>
      </div>
      <div class="subtitle">发布时间:{{data.pubTime | date}}</div>
      <div style="color:#333;font-size:16px;" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:{}
    }
  },
  mounted(){
    // 发送详情,获取详情,然后展现在页面上!
    // 返回值的html中有些图片地址
    let url = "newsDetail"
    let params = 'nid='+this.$route.params.nid;
    this.axios.post(url,params)
    .then(res => {
      console.log(res);
      this.data = res.data.data[0];
      console.log(this.data);
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
</script>

<style scoped>
/* 新闻详情 */
.detail{
  margin: 0 auto;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 30px;
  min-height: 200px;
}
.title{
  border-bottom:1px dashed #aaa;
  text-align: center;
}
.subtitle{
  color:#aaa;
  font-size:0.8rem;
  margin-top:5px;
  margin-bottom: 10px;
  text-align: center;
}
</style>