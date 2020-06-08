<template>
  <div class="product">
    <el-card shadow="hover">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>迷你热气球</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-row>
      <el-col :span="8" v-for="(item,index) in data" :key="index">
        <el-card :body-style="{ padding: '0px'}">
          <img :src="$store.state.imgURL+item.pic" class="image">
          <div style="padding: 14px;">
            <span>{{ item.title1 }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.title2 }}</time>
              <el-button type="text" class="button"><router-link class="rlink" :to="`/productDetail/${item.pid}`">查看详情</router-link></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 分页 -->
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
  mounted(){
    this.getData(1)
  },
  methods: {
    // 页数变化
    pageChange(val){
      this.getData(val);
    },
    // 加载数据
    getData(pno){
      let url="product";
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
    }
  },
}
</script>

<style scoped>
.product{
  margin:0 auto;
  width: 80%;
  /* display: flex;
  justify-content: space-evenly; */
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 300px;
  border-bottom: 1px solid #eee;
}
.el-card{
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
.rlink{
  color: tomato;
  border: 1px solid tomato;
  padding: 3px 10px;
  border-radius: 5px;
}
.rlink:hover{
  background-color: tomato;
  color: white;
  box-shadow: #aaa 2px 2px 2px;
}
</style>