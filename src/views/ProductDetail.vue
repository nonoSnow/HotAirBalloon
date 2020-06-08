<template>
  <div class="pdetail">
    <div style="margin-top:10px;margin-bottom:10px;">
      <el-card shadow="hover">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/product">迷你热气球</a></el-breadcrumb-item>
          <el-breadcrumb-item>{{data.title1}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
    </div>
    <div class="box" v-if="data">
      <el-image :src="$store.state.imgURL+data.pic" style="width:40%;height:400px;border:1px solid #aaa;margin-right:40px;"></el-image>
      <div>
        <span class="title">{{data.title1}}</span>
        <!-- <el-divider></el-divider> -->
        <div style="display:flex;flex-direction: column;">
          <div class="cell">
            <span>类型：</span>
            <span>型号{{data.level}}</span>
          </div>
          <div class="cell">
            <span>载量：</span>
            <span>{{data.size}}</span>
          </div>
          <div class="cell">
            <span>布料质量：</span>
            <span>{{data.level}}</span>
          </div>
          <div class="cell">
            <span>适用场景：</span>
            <span>{{data.title2}}</span>
          </div>
          <div class="cell" style="margin-top:80px;">
            <span>价格：</span>
            <span style="color:tomato;font-size:30px;">￥{{data.price}}</span>
          </div>
          <div style="align-items:flex-end;">
            <el-button type="warning" icon="el-icon-shopping-cart-2" @click="addCart">加入购物车</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="diver">产品详情</div>
    <div class="detail">
      <span>{{data.detail}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL:'http://127.0.0.1:8000/static/images/product/',
      data:[],
      pid:this.$route.params.pid
    }
  },
  mounted() {
    let pid=this.$route.params.pid;
    this.getData(pid);
  },
  watch: {
    $route(newValue){
      this.pid=newValue.params.pid;
      this.getData(this.pid);
    }
  },
  methods: {
    // 加入购物车
    addCart(){
      let uid=this.$store.state.uid;
      if (uid) {
        let url="addcart";
        let params=`uid=${uid}&pid=${this.pid}`
        this.axios.post(url,params)
        .then(res => {
          console.log(res);
          if (res.data.code==1) {
            this.$message({
              message: '加入购物车成功',
              type: 'success'
            });
          }else{
            this.$message({
              message: '加入购物车失败',
              type: 'warning'
            });
          }
          
        })
        .catch(err => {
          console.error(err); 
        })
      }else{
        this.$alert('请先登录，才可以加入购物车', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            console.log(action);
            this.$router.replace("/login")
          }
        });
      }
    },
    getData(pid){
      let url="productDetail";
      let params="pid="+pid;
      this.axios.post(url,params)
      .then(res => {
        console.log(res);
        this.data=res.data.data[0]
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
}
</script>

<style scoped>
.pdetail{
  margin:0 auto;
  width: 80%;
}
.box{
  display: flex;
  /* justify-content: center; */
  margin-top:10px;
}
.title{
  font-size: 30px;
  color: #333;
  display: block;
  margin-bottom: 20px;
}
.cell{
  margin-bottom: 10px;
  font-size: 14px;
}
.detail{
  font-size: 20px;
  color: #333;
  margin-bottom:30px;
}
.diver{
  border-bottom:1px solid #aaaaaa;
  padding: 15px 0;
}
</style>