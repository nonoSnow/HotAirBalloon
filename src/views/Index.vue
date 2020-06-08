<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item class="carousel-item" v-for="(item,index) in banners" :key="index">
        <img class="carousel-img" :src="item.url" width="100%" alt />
        <!-- <el-image :src="item.url"></el-image> -->
      </el-carousel-item>
    </el-carousel>
    <!-- 主要内容 -->
    <div class="content">
      <!-- 产品介绍 -->
      <div>
        <div style="display:flex;justify-content:space-between">
          <span class="title">
            <span style="color:tomato">1F </span>热气球产品
          </span>
          <router-link class="more" to="/product" style="color:#ccc;font-size:14px;">more</router-link>
        </div>
        <div>
          <div v-for="(item, index) in product" :key="index" class="img">
            <router-link :to="`/productDetail/${item.pid}`">
              <img :src="$store.state.imgURL+item.pic" width="300px" height="300px" alt />
            </router-link>
          </div>
        </div>
      </div>
      <!-- 公司介绍 -->
      <div style="display:flex;justify-content:space-between;margin-top:10px;">
        <div style="width:47%">
          <div style="display:flex;justify-content:space-between;padding:5px 0;">
            <span class="title">
              <span style="color:tomato">2F </span>关于热气球
            </span>
            <router-link class="more" to="/about" style="color:#ccc;font-size:14px;">more</router-link>
          </div>
          <div class="compony">
            <div>
              <span>热气球（Hot Air Balloon）是一个比空气轻，上半部是一个大气球状，下半部是吊篮的飞行器。气球的内部加热空气，这样相对与外部冷空气具有更低的密度，作为浮力来使整体发生位移；吊篮可以携带乘客和热源（大多是明火）。现代运动气球通常由尼龙织物制成，开口处用耐火材料制成。</span>
            </div>
          </div>
        </div>
        <div style="width:47%">
          <div style="display:flex;justify-content:space-between;padding:5px 0;">
            <span class="title">
              <span style="color:tomato">3F </span>热气球动态
            </span>
            <router-link class="more" to="/newslist" style="color:#ccc;font-size:14px;">more</router-link>
          </div>
          <div class="compony">
            <div class="news">
              <ul>
                <li class="cell" v-for="(item, index) in newslist" :key="index">
                  <router-link class="newslink" :to="`/newsdetail/${item.nid}`">{{item.title}}</router-link>
                  <span>{{item.pubTime | date}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        { url: require("../assets/images/banner1.jpg") },
        { url: require("../assets/images/banner2.jpg") },
        { url: require("../assets/images/banner3.jpg") },
        { url: require("../assets/images/banner4.jpg") }
      ],
      newslist:[],
      product:[],
    };
  },
  mounted() {
    this.getData();
    this.getProduct();
  },
  methods: {
    getData(){
      // 获取公司动态 news
      let url="newsList"
      let params = "pageNum="+1;
      this.axios.post(url,params)
      .then(res => {
        console.log(res);
        this.newslist=res.data.data;
      })
      .catch(err => {
        console.error(err); 
      })
    },
    // 获取产品
    getProduct(){
      let url="product";
      let params = 'pageNum='+1;
      this.axios.post(url,params)
      .then(res => {
        console.log(res);
        this.product = res.data.data;
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
};
</script>

<style scoped>
/* .carousel-item {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
}
.carousel-img {
  max-width: 100%;
  max-height: 100%;
} */
.content {
  width: 80%;
  margin: 10px auto;
}
.content > div:first-child > div {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
  padding-top: 20px;
  margin-top: 5px;
}
.content .title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.compony {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
}
.compony span {
  color: #333;
  font-size: 15px;
  widows: 100%;
}
.news ul{
  list-style: none;
  color: #333;
  font-size: 15px;
}
.news .cell{
  width: 37vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border-bottom: 1px dashed #cccccc;
}
.newslink{
  color: #333;
}
.newslink:hover{
  color:tomato;
}
.img{
  /* border:1px solid #aaaaaa; */
  text-align: center;
}
.img:hover{
  box-shadow: #aaa 2px 2px 2px;
}
.more:hover{
  color: tomato !important;
}
</style>