<template>
  <div>
    <div class="about">
      <div style="margin-top:10px;margin-bottom:10px;">
        <el-card shadow="hover">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于热气球</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
      </div>
      <el-image fit="contain" :src="logo"></el-image>
    </div>
    <div class="about" style="margin-bottom:30px;">
      <article>
        <p>
        十八世纪，法国造纸商孟格菲兄弟在欧洲发明了热气球。他们受碎纸屑在火炉中不断升起的启发，用纸袋把热气聚集起来做实验，使纸袋能够随着气流不断上升。1783年6月4日，孟格菲兄弟在里昂安诺内广场做公开表演，一个圆周为110英尺的模拟气球升起，飘然飞行了1.5英里。同年9月19日，在巴黎凡尔赛宫前，孟格菲兄弟为国王、王后、宫庭大臣及13万巴黎市民进行了热气球的升空表演。同年11月21日下午，孟格菲兄弟又在巴黎穆埃特堡进行了世界上第一次热气球载人空中飞行，飞行了25分钟，飞越半个巴黎之后降落在意大利广场附近。这次飞行比莱特兄弟的飞机飞行早了整整120年。在充气气球方面，法国的罗伯特兄弟是最先乘充满氢气的气球飞上天空的。<br>
        </p>
        <br>
        <p>
        第二次世界大战以后，高科技使球皮材料以及致热燃料得到普及，热气球成为不受地点约束、操作简单而方便的公众体育项目。1978年8月11日至17日，“双鹰3号”成功飞越了大西洋，而在1981年它又成功跨越太平洋。1980年代西方的热气球被引入中国。1982年美国著名刊物《福布斯》杂志总编辑史提夫·福布斯的父亲马尔康姆·福布斯先生驾驶热气球后转摩托车旅游来到中国，自延安到北京，完成了驾球飞临世界每个国家的愿望。<br>
        </p>
        <br>
        <p>
        国际航空联合会曾将热气球列为最安全的飞行器。单从数据上看，热气球的安全系数也是相当高的。据了解，全世界约有2万个热气球，在欧美等发达国家，热气球更是一项热门的运动，几乎每天都有热气球比赛或活动。随着热气球运动的发展，科技元素也不断地加入热气球运动中，反映在所采用的热气球器具、飞行员的理论实战培训等都有了质的飞跃。<br>
        </p>
        <br>
        <p>
        今天，热气球作为一个体育项目正日趋普及，它曾创造上升34668米高的纪录。
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591362427402&di=303a2f91455911c0196559d893ca563c&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd10102%2F455%2Fw1280h775%2F20200419%2F7952-iskepxt5067720.jpg"
    }
  },
}
</script>

<style scoped>
.about{
  margin:0 auto;
  width: 80%;
}
</style>