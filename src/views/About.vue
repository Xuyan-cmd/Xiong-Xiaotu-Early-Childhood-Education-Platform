<template>
  <div class="about">
    <div class="section section1">
      <div class="section_main">
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

        <div class="title">
          <h1>我们能为您提供什么？</h1>
          <h3>专业团队课程设计XXXX</h3>
        </div>

        <div
          class="card_list"
          v-if="show === true"
        >
          <div
            class="card_info"
            v-for="item in 4"
            :key="item"
            @click="onShow"
          >
            <img
              :src="rabbit1"
              alt=""
            >
          </div>

          <div class="rabbit_img">
            <div class="text">点击查看~</div>
            <img
              :src="rabbit2"
              alt=""
            >
          </div>
        </div>

        <div
          class="card_list_mask"
          v-if="show === false"
        >
          <div
            class="card_info"
            v-for="item in 4"
            :key="item"
            @click="onShow"
          >
            <img
              :src="bear1"
              alt=""
            >
            <div class="info_text">
              <h3>文字介绍</h3>
              <span>文字介绍</span>
              <p>文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述</p>
            </div>
          </div>

          <div class="bear_img">
            <div class="text">这是我们的团队~</div>
            <img
              :src="bear2"
              class="bear"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>

    <div class="section section2">
      <div class="section_main">
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

        <div class="text">
          <h2>打造亲子互动新场景。</h2>
          <p>国内家长一直以来都在探索如何去进行儿童教育。</p>
          <p>如何激发儿童的探索欲望与求知欲，如何开发儿童的兴趣爱好，如何认识这个世界?</p>
          <p>在万事都讲究方法的时代,家长如何温和地与儿童对话，进行素质与德智教育?</p>
        </div>

        <ul>
          <li>打造儿童与家长共同的在线成长课堂</li>
          <li>强调父母教育在儿童成长的重要性</li>
          <li>亲子互动型游戏学习开创幼儿在线教育新场景</li>
          <li>家长陪伴式教育，减少儿童游戏成瘾的概率</li>
        </ul>
      </div>
    </div>

     <div class="section section3">
      <div class="section_main">
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

        <div class="item_box">
          <div class="item_info">
            <h3>您的孩子可以：</h3>
            <ul>
              <li>拥有多元化主题教育,包含德、智育及安全。</li>
              <li>学习“幼儿性教育”与“死亡教育”等新兴话题。</li>
              <li>趣味游戏,在游戏中学习、认识世界。</li>
            </ul>
          </div>
          <div class="item_info">
            <h3>您可以：</h3>
            <ul>
               <li>拥有一个与孩子一起交流学习的途径</li>
               <li>学习了解新的育儿动向</li>
               <li>为孩子提供更多元的学习环境</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  data () {
    return {
      rabbit1: require('../assets/兔兔.png'),
      rabbit2: require('../assets/兔兔1.png'),
      bear1: require('../assets/熊1.png'),
      bear2: require('../assets/熊.png'),
      show: true
    }
  },
  created () { },
  mounted () { },
  methods: {
    onShow () {
      if (this.show === false) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  background: transparent;
  .head_right {
    float: right;
  }
}
.section {
  width: 100%;
  height: 100vh;
}
.section_main {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.section1 {
  width: 100%;
  margin: 0 auto;
  background: url('../assets/bg2.png') no-repeat;
  background-size: cover;
  .title {
    position: absolute;
    top: 50px;
    left: 0;
    h1 {
      letter-spacing: 3px;
      font-size: 48px;
    }
    h3 {
      text-decoration: underline;
      color: #ccc;
      font-weight: normal;
      letter-spacing: 3px;
    }
  }

  .card_list {
    margin-top: 80px;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_info {
      width: 23%;
      height: 100%;
      border-radius: 20px;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
      position: relative;
      background: #dae4f1;
      transition: 0.3s;
      img {
        width: 50%;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .card_info::after {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      background: transparent;
      background: #faeff3;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3) inset;
      border-radius: 50%;
    }
    .card_info:hover {
      cursor: pointer;
      background: #f7e3af;
    }
  }

  .card_list_mask {
    margin-top: 80px;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_info {
      width: 23%;
      height: 100%;
      border-radius: 20px;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);
      position: relative;
      background: #dae4f1;
      transition: 0.3s;
      img {
        width: 50%;
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .card_info::after {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      background: transparent;
      background: #faeff3;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3) inset;
      border-radius: 50%;
    }
    .card_info:hover {
      cursor: pointer;
      background: #f7e3af;
    }

    .info_text {
      width: 80%;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      span {
        font-size: 12px;
        color: #999;
      }
      p {
        margin-top: 20px;
        font-size: 14px;
        text-align: justify;
      }
    }
  }

  .bear_img {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 300px;
    }
    .text {
      position: absolute;
      bottom: 40px;
      left: -160px;
      background: #fff;
      width: 200px;
      height: 80px;
      border-radius: 50%;
      transform: rotate(-20deg);
      line-height: 80px;
      text-align: center;
      font-size: 22px;
    }
  }

  .rabbit_img {
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      width: 150px;
    }
    .text {
      position: absolute;
      bottom: 40px;
      right: -240px;
      background: #fff;
      width: 200px;
      height: 80px;
      border-radius: 50%;
      transform: rotate(10deg);
      line-height: 80px;
      text-align: center;
      font-size: 22px;
    }
  }
}

.section2 {
  width: 100%;
  margin: 0 auto;
  background: url('../assets/bg1.png') no-repeat;
  background-size: cover;
  .text {
    position: absolute;
    top: 100px;
    h2 {
      font-size: 40px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    p{
      margin-left: 200px;
      margin-bottom: 10px;
      color: #999;
    }
  }

  ul{
    display: block;
    position: absolute;
    width: 600px;
    bottom: 80px;
    right: 0;
    li{
      list-style: disc;
      font-size: 28px;
      margin-bottom: 30px;
      text-align: justify;
    }
  }
}

.section3{
  background: #faeff2;
  .item_box{
    width: 70%;
    height: 60%;
    margin: 0 auto;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
    .item_info{
      width: 47%;
      height: 100%;
      background: #f8e9d3;
      border-radius: 30px;
      box-shadow: 3px 5px 12px 3px rgba(0, 0, 0, 0.2);
      padding: 50px;
    }
    .item_info:nth-child(2){
      background: #cee0ef;
    }
    h3{
      font-size: 28px;
      font-weight: normal;
      margin-bottom: 40px;
    }
    ul{
      margin-left: 20px;
      li{
        list-style: disc;
        font-size: 20px;
        text-align: justify;
        margin-bottom: 40px;
        margin-left: 20px;
      }
    }
  }
}
</style>
