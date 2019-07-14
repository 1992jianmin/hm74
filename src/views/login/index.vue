<template>
<div class="login-container">
    <el-card class="login-box">
        <img src="../../assets/images/logo_index.png" alt="" >
    <el-form ref='loginForm' :model="loginForm" :rules="loginRules" :status-icon="true">
        <el-form-item  prop="mobile">
        <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
        <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
        <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox :value="true" style="margin-right:5px"></el-checkbox>我已阅读并同意<span>用户协议</span>和<span>隐私条款</span>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" type="primary" @click="login()">登 录</el-button>
             </el-form-item>
    </el-form>
    </el-card>
</div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      loginForm: {
        mobile: '18638000724',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入正确的手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入正确的验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      //   对整体进行验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交登录
          this.$http
            .post('authorizations', this.loginForm)
            .then(res => {
              // sessionStorage BOM对象 全局对象,作用是保存数据
              // 是有有效期的  当关闭浏览器后失效
              // sessionStorage.setItem(key,value) 存储数据,value 字符串
              // sessionStorage.getItem(key) 获取数据
              // sessionStorage.removeItem(key)删除数据
              // sessionStorage.clear()清空所有数据
              window.sessionStorage.setItem('hm74', JSON.stringify(res.data.data))
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码不正确')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.login-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
    .login-box{
        width: 400px;
        height: 330px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
        img{
            display: block;
            width: 200px;
            margin: 10px auto;
        }
    }
    span{
      color: #409EFF;
    }
}

</style>
