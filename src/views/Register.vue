<template>
  <div class="register">
    <div class="header">
      <el-row :gutter="10">
        <el-col :span="1"> &emsp; </el-col>
        <el-col :span="23">
          <div class="head_right">
            <router-link :to="'/'">首页</router-link>
            <router-link :to="'/'">首页</router-link>
            <router-link :to="'/'">首页</router-link>
            <a href="#">关于我们</a>
            <a
              href="#"
              class="icon_user"
            >
              <i class="el-icon-user"></i>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="form_box">
      <h2>注册进入熊小兔！</h2>

      <div class="input_wrap">
        <el-input v-model="phone" placeholder="邮箱 / 手机"></el-input>
      </div>
          <div class="input_wrap">
        <el-input v-model="password" show-password  placeholder="密码"></el-input>
      </div>
      <div class="btn_wrap">
        <a href="#" class="login" @click="onLogin">登录</a>
        <a href="#" class="more" @click="onMore">了解更多</a>
      </div>
      <div class="forget">
        <a href="#">忘记密码</a>
      </div>
    </div>

    <div class="btm_img">
      <img :src="rabbit" class="rabbit" alt="">
      <div class="btn_text">
        等待您的加入！
      </div>
      <img :src="bear" class="bear" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  components: {},
  data () {
    return {
      phone: '',
      password: '',
      rabbit: require('../assets/兔兔1.png'),
      bear: require('../assets/熊1.png')
    }
  },
  created () { },
  mounted () { },
  methods: {
    onLogin () {
      if (this.phone === '123456' && this.password === '123456') {
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.$router.push({ path: '/home' })
      } else {
        this.$message({
          message: '账号或密码错误，请重新输入',
          type: 'error'
        })
      }
    },

    onMore () {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border-color: #fff;
}
.header {
  background: transparent;
  .head_right {
    float: right;
  }
}
.register {
  height: 100vh;
  overflow-y: hidden;
  background: url('../assets/bg3.png') no-repeat;
  background-size: cover;
}

.form_box{
  width: 450px;
  border-radius: 30px;
  background: #f7e3b5;
  padding: 30px;
  box-shadow: 0px 5px 12px 5px rgba(0,0,0,.2);
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2{
    margin-bottom: 20px;
  }

  .input_wrap{
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 20px;
    .el-input{
      outline: none !important;
      border: none !important;
    }
  }

  .btn_wrap{
    display: flex;
    justify-content: space-between;
    a{
      width: 30%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 15px;
      font-weight: 600;
      margin-bottom: 20px;
      box-shadow: 0 5px 5px 0 rgba(0,0,0,.4);
    }
    .login{
      background: #91b178;
    }
    .more{
      background: #d0dcdd;
    }
  }

  .forget{
    font-size: 14px;
    a{
    color: #999;
    }
  }
}

.btm_img{
  img{
    width: 20%;
  }
  .rabbit{
    position: fixed;
    bottom: 0;
    left: 15%;
  }
  .bear{
    position: fixed;
    bottom: 0;
    right: 15%;
  }

  .btn_text{
    font-size: 40px;
    color: #000;
    background: #fff;
    width: 350px;
    height: 145px;
    line-height: 134px;
    text-align: center;
    border-radius: 50%;
    position: fixed;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
