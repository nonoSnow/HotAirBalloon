<template>
  <div>
    <div style="margin:0 auto;width:80%;margin-top:10px;margin-bottom:10px;">
      <el-card shadow="hover">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>热气球动态</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
    </div>
    
    <div class="newslist">
      <ul class="box">
        <li class="box-cell" v-for="(item,index) in data" :key="index">
          <router-link class="rlink" :to="`/newsdetail/${item.nid}`">{{item.title}}</router-link>
          <span>{{item.pubTime | date}}</span>
        </li>
      </ul>
    </div>
    
    <div class="page">
      <el-pagination
        :page-size="pageSize"
        :pager-count="7"
        :page-count="pageCount"
        layout="prev, pager, next"
        :total="totalRecord"
        @prev-text="getData(pageNum-1)"
        @next-text="getData(pageNum+1)"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[],
      pageNum:0,  // 当前页
      pageCount:0, // 总页数
      detail:[],  //详情页
      totalRecord:0, //总数
      pageSize:0,  //每页数量
    }
  },
  // 生命周期:页面加载完毕时, 通常在此处发送初始化的网络请求
  mounted() {
    this.getData(1);
  },
  methods: {
    // 页数变化
    pageChange(val){
      this.getData(val);
    },
    // 获取指定页数的数据
    getData(pno){
      let url = "newsList"
      let params = 'pageNum='+pno;
      this.axios.post(url,params)
      .then(res => {
        console.log(res);
        let {pageNum,pageCount,data,totalRecord,pageSize}=res.data;
        this.pageNum = pageNum;
        this.pageCount = pageCount;
        this.data = data;
        this.totalRecord=totalRecord;
        this.pageSize=pageSize;
      })
      .catch(err => {
        console.error(err); 
      })
    },
  },
  // 过滤器分两种:全局过滤器(Vue.filter(xxx,xxx)) 和 局部过滤器
  filters:{
    // {{时间戳 | date}}
    date(timestamp){
      // 服务器返回的是字符串类型的时间戳,必须转数字才能用
      let ts = parseInt(timestamp);
      let date = new Date(ts);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDay();

      return `${year}年${month}月${day}日`
    }
  }
}
</script>

<style>
.newslist{
  display: flex;
  justify-content: center;
  height: 260px;
}
.page{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.box{
  margin:0;
  padding:0;
  width:80%;
}
.box-cell{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px dashed #aaa;
}
.rlink{
  color: #333;
}
.rlink:hover{
  color: tomato;
}
</style>