<template>
  <div class="footer-container">
    <div class="footer">
      <div class="box">
        <div>
          <ul>
            <li>走进迷你</li>
            <li>公司简介</li>
            <li>迷你精神</li>
            <li>品牌历程</li>
          </ul>
          <ul>
            <li>成为合作伙伴</li>
            <li>成为核心供应商</li>
            <li>电商进销入口</li>
            <li>成为线下代理商</li>
          </ul>
          <ul>
            <li>售后服务</li>
            <li>在线报修</li>
            <li>售后政策</li>
            <li>下载中心</li>
          </ul>
          <ul>
            <li>加入迷你</li>
            <li>招聘贤才</li>
            <li>联系我们</li>
            <li>网站地图</li>
          </ul>
        </div>
        <div>
          <h3>4000-100-100</h3>
          <span>周一至周日9:00-18:00</span>
          <button>金牌客服</button>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="foot">
      <span>Copyright © 2014 Apple Inc 保留所有权利。使用条款|客户隐私政策 © 迷你热气球科技有限公司 京公安网安备 11010500896 | 京ICP备 12050755</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-container{
  background-color: #eeeeee;
}
.footer{
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.footer>div{
  width: 80%;
}
.footer ul{
  list-style: none;
}
.footer ul>li:not(:first-child){
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
}
.footer ul>li:not(:first-child):hover{
  color: tomato;
  cursor: pointer;
}
.footer .box{
  display: flex;
  justify-content: space-between;
}
.footer .box>div:first-child{
  display: flex;
  width: 60%;
  justify-content: space-between;
}
.footer .box>div:last-child{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.footer .box span{
  color: #aaaaaa;
  font-size: 14px;
  margin:5px 0;
}
.footer .box button{
  background: #0aa1ed;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
}
.footer .box button:hover{
  box-shadow: #aaa 2px 2px 2px;
}

.foot{
  text-align: center;
  color: #aaaaaa;
  font-size: 14px;
  padding-bottom: 30px;
}
</style>