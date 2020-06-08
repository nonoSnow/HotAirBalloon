<template>
  <div class="cart" v-if="data">
    <div style="margin-top:10px;margin-bottom:10px;">
      <el-card shadow="hover">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的购物车</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
    </div>
    <div v-if="!data.length" style="height:200px;">
      <el-alert  title="暂无商品，快去加购吧"  type="info"></el-alert>
    </div>
    <!-- 全选 -->
    <div v-else>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <!-- 多选 -->
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCarts" @change="handleCheckedCartsChange">
        <div v-for="(item,index) in data" :key="index">
          <el-checkbox :label="index">
            <div class="box">
              <el-image @click="doDetail(item.pid)" :src="$store.state.imgURL+item.pic" style="width:100px;height:100px;border:1px solid #eee;padding:10px;" ></el-image>
              
              <div>{{item.title1}}</div>
              <div>单价：￥{{item.price}}</div>
              <!-- 计数器 -->
              <el-input-number style="width:200px" v-model="item.count" @change="handleChange(item.count,item.cid)" :min="1" :max="10" label="描述文字"></el-input-number>
              <div>金额：￥{{item.price*item.count}}</div>
              <!-- 删除 -->
              <el-popconfirm title="确定删除该商品吗？" icon="el-icon-info" iconColor="tomato" @onConfirm="doDel(item.cid)">
                <el-button slot="reference" type="danger" icon="el-icon-delete" circle></el-button>
              </el-popconfirm>
            </div>
          </el-checkbox>
        </div>
      </el-checkbox-group>
      <div class="end">
        <el-button type="primary">结算</el-button>
        <div style="margin-right:10px;">总金额：￥<span style="font-size:20px;color:tomato">{{total}}</span></div>
        <div style="margin-right:10px;">已选商品：{{piece}}件</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkAll: false,
        checkedCarts: [],
        isIndeterminate: true,
        num:1,
        data:null,
        total:0, // 总金额
        piece:0 // 总件数
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      // 跳转到详情页面
      doDetail(pid){
        this.$router.replace("/productDetail/"+pid)
      },
      // 删除数据
      doDel(cid){
        let url = "delcart";
        let params = "cid="+cid;
        this.axios.post(url,params)
        .then(res => {
          console.log(res);
          this.$message({
              message: '删除成功',
              type: 'success'
          });
          this.getData();
        })
        .catch(err => {
          console.error(err); 
        })
      },
      // 加载数据
      getData(){
        let uid=this.$store.state.uid;
        let url = "cart";
        let params = "uid="+uid;
        this.axios.post(url,params)
        .then(res => {
          console.log(res);
          this.data=res.data.data;
        })
        .catch(err => {
          console.error(err); 
        })
      },
      // 计数器
      handleChange(count,cid) {
        console.log(count,cid);
        // 更新数据
        let url="addcount";
        let params=`cid=${cid}&count=${count}`
        this.axios.post(url,params)
        .then(res => {
          console.log(res);
          this.getData();
        })
        .catch(err => {
          console.error(err); 
        })
      },
      // 全选
      handleCheckAllChange(val) {
        console.log(val);
        console.log(this.data);
        let arr=[];
        let i=0;
        this.data.forEach(e=>{
          console.log(e);
          arr.push(i);
          i++;
        })
        if (val) {
          this.handleCheckedCartsChange(arr)
        }else{
          this.handleCheckedCartsChange()
        }
        // arr数组里面的元素要与 :label中的元素一致
        this.checkedCarts = val ? arr : [];
        this.isIndeterminate = false;
      },
      // 多选
      handleCheckedCartsChange(value) {
        console.log(value);
        let sum = 0;
        let piece = 0;
        // 判断value是否为undefined，是就赋值0 并清空
        if (!value) {
          this.total = 0;
          this.piece = 0;
          return 
        }
        // 算商品的总金额和数量
        value.forEach(e => {
          sum += this.data[e].count*this.data[e].price;
          piece += 1;
        });
        this.total = sum;
        this.piece = piece;

        let checkedCount = value.length;
        this.checkAll = checkedCount === this.data.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.data.length;
      }
    }
  };
</script>

<style scoped>
.cart{
  margin:0 auto;
  width:80%;
  margin-top:10px;
  margin-bottom: 30px;
}
.box{
  display:flex;
  margin-bottom:10px;
  padding:10px;
  justify-content: space-between;
  align-items: center;
  width:75vw;
}
.end{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
</style>