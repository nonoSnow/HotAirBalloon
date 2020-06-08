<template>
  <div class="container">
    <table></table>
    <div class="box-card">
      <el-form label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="ruleForm.uname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input v-model="ruleForm.upwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doReg('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // 固定属性 data: 用于书写和页面关联的 数据项
  data() {
    return {
      ruleForm: {
        uname:"",
        upwd:"",
        phone:"",
      },
      rules:{
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        upwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '请输入6-12位密码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ]
      }
    }
  },
  //  固定属性methods: 用于书写和页面关联的函数
  methods:{
    doReg(formName){
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.uname,this.ruleForm.upwd,this.ruleForm.phone)
          let url = "register";
          let params = `uname=${this.ruleForm.uname}&upwd=${this.ruleForm.upwd}&phone=${this.ruleForm.phone}`
          this.axios.post(url,params)
          .then(res => {
            console.log(res);
            // let {msg}=res.data;
            if (res.data.code==3) {
              this.$message({
                type: 'info',
                message: "该用户已存在，请重新注册"
              });
            }else if(res.data.code==1){
              this.$alert('即将跳到登录页面', '恭喜您，注册成功！', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log(action)
                  this.$router.push('/login')
                }
              });
            }
            
          })
          .catch(err => {
            console.error(err);
            this.$message({
              type: 'info',
              message: "注册失败，请重试"
            }); 
          })
        } else {
          console.log('error submit!!');
          this.$message({
            type: 'info',
            message: "请完善信息再注册"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style>
*{
  margin:0; padding:0;
}
.container{
  width: 100%;
  height: 582px;
  background-image: url(../assets/images/bg.jpg);
  background-repeat: no-repeat;
}
.box-card {
  position: absolute;
  width: 480px;
  background-color: rgba(250, 250, 250, 0.5);
  padding: 30px 20px 0 0;
  margin-top: 90px;
  margin-left: 50%;
  text-align: end;
  left:-240px;
  border-radius: 10px;
}
</style>