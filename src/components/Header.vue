<template>
  <div>
    <!-- 头部 -->
    <div class="header-box">
      <!-- <img src="../assets/images/logo.jpg" width="50" height="70" alt=""> -->
      <img src="../assets/images/mini.jpg" width="130" height="50" alt="">
      <div>
        <div style="display: flex;justify-content: flex-end;align-items: center;">
          <router-link v-if="!$store.state.uid" to="/register" class="btn">注册</router-link> 
          <span v-if="!$store.state.uid" style="color:#ccc"> | </span>
          <router-link v-if="!$store.state.uid" to="/login" class="btn">登录</router-link>
          <span v-if="$store.state.uid">欢迎您！{{$store.state.uname}}</span>
          <button v-if="$store.state.uid" @click="logout" class="btn">退出</button>
        </div>
        <el-input placeholder="请输入查询内容" v-model="search" class="input-with-select" @keyup.enter.native="searchAll">
          <el-button slot="append" type="primary" icon="el-icon-search" @click="searchAll">搜索</el-button>
        </el-input>
      </div>
    </div>
    <div class="header-nav">
      <table></table>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/"><i class="el-icon-s-home"></i>首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">产品中心</template>
          <el-menu-item index="2-1">迷你热气球</el-menu-item>
          <el-submenu index="2-2">
            <template slot="title">热门迷你热气球</template>
            <el-menu-item index="2-2-1">迷你热气球1号</el-menu-item>
            <el-menu-item index="2-2-2">迷你热气球2号</el-menu-item>
            <el-menu-item index="2-2-3">迷你热气球3号</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/newslist">热气球动态</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/about">关于热气球</router-link></el-menu-item>
        <el-menu-item index="5" v-if="$store.state.uid" style="float:right"><router-link to="/cart"><i class="el-icon-shopping-cart-full"></i>我的购物车</router-link></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:'',
      activeIndex2: '1'
    }
  },
  methods: {
    // 查询产品
    searchAll(){
      this.$router.push("/searchproduct/"+this.search);
    },
    logout(){
      // 退出
      this.$store.commit("updateUser",{uid:'',uname:'',phone:''})
      if(this.$route.fullPath=="/cart")
      this.$router.replace("/")
    },
    // 导航的选择项目
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key=="2-1"){
        this.$router.push("/product")
      }else if(key=="2-2-1"){
        this.$router.push("/productDetail/1")
      }else if(key=="2-2-2"){
        this.$router.push("/productDetail/2")
      }else if(key=="2-2-3"){
        this.$router.push("/productDetail/3")
      }
    }
  },
}
</script>

<style>
a{
  text-decoration: none;
}
.header-box{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.header-box>div>div{
  padding-top:10px;
}
.header-box span{
  font-size: 12px;
}
.header-box .btn{
  font-size: 12px;
  text-decoration: none;
  padding:1px 12px;
  background: tomato;
  color: white;
  border-radius: 5px;
  border:1px solid tomato;
  margin: 0 5px;
}
.header-box .btn:hover{
  background: white;
  color: tomato;
}
.header-nav{
  width: 100%;
  background-color: #545c64;
  display: flex;
  justify-content: center;
}
.el-menu-demo{
  width: 80%;
}
.el-menu.el-menu--horizontal{
  border-bottom: solid 1px #545c64 !important;
}
</style>