<template>
  <div class="home">
    <div class="header">
      <el-row :gutter="10">
        <el-col :span="7">
          <div class="logo">
           <img
              :src="logo"
              class="logo"
              alt=""
            >
            <div class="logo_text">
              <h1>熊兔动物园</h1>
              <h3>欢迎你来到乐园</h3>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="search">
            <i class="el-icon-search"></i>
            <input
              type="text"
              placeholder="搜索，发现新的快乐"
            >
          </div>
        </el-col>
        <el-col :span="7">
          <div class="head_right">
            <a href="#">我的课程</a>
            <a href="#">历史浏览</a>
            <a href="#">我的收藏</a>
            <!-- <a href="#">信息</a> -->
            <router-link :to="'/register'">注册</router-link>
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
    <div class="nav">
      <ul>
        <li>
          <router-link :to="'/'">首页</router-link>
        </li>
        <li>
          <router-link
            :to="'/zoo'"
            class="select"
          >熊兔动物园</router-link>
        </li>
        <li>
          <router-link :to="'/community'">社区广场</router-link>
        </li>
        <li><a href="#">推荐阅读</a></li>
        <li><a href="#">育儿商城</a></li>
      </ul>
    </div>

    <div class="main">
        <div class="swiper">
        <el-carousel
          :interval="5000"
          type="card"
          indicator-position="none"
        >
          <el-carousel-item>
            <img :src="banner1" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="banner2" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="banner1" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img :src="banner2" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="zoo_section1">
        <el-row :gutter="50">
          <el-col :span="12">
            <div class="section1_info section1_info1">
              <h2>收藏游戏：</h2>
              <div class="section1_content">
                <div @click="onShow">
                  <div class="section1_item">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                </div>
                <router-link :to="'/zooInfo'">
                  <div class="section1_item">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                </router-link>
                <router-link :to="'/zooInfo'">
                  <div class="section1_item">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                </router-link>
                <router-link :to="'/zooInfo'">
                  <div class="section1_item">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                </router-link>
                <router-link :to="'/zooInfo'">
                  <div class="section1_item">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                </router-link>
                <router-link :to="'/zooInfo'">
                  <div class="section1_item">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="section1_info section1_info2">
              <h2>正在学习：</h2>
              <div class="section1_content">
                <div class="section1_item">
                  <img
                    :src="bear"
                    alt=""
                  >
                </div>
                <div class="section1_item">
                  <img
                    :src="rabbit"
                    alt=""
                  >
                </div>
               <div class="section1_item">
                  <img
                    :src="bear"
                    alt=""
                  >
                </div>
                <div class="section1_item">
                  <img
                    :src="rabbit"
                    alt=""
                  >
                </div>
                <div class="section1_item">
                  <img
                    :src="bear"
                    alt=""
                  >
                </div>
                <div class="section1_item">
                  <img
                    :src="rabbit"
                    alt=""
                  >
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="zoo_section2">
        <div class="section2_info">
          <h2>心里教育</h2>
          <div class="section2_content">
            <div
              class="content_img"
              v-for="i in 6"
              :key="i"
            >
            <img :src="rabbit" alt="">
            </div>
          </div>
        </div>
        <div class="section2_info">
          <h2>人际关系</h2>
          <div class="section2_content">
            <div
              class="content_img"
              v-for="i in 6"
              :key="i"
            >
            <img :src="bear" alt="">
            </div>
          </div>
        </div>
        <div class="section2_info">
          <h2>安全教育</h2>
          <div class="section2_content">
            <div
              class="content_img"
              v-for="i in 6"
              :key="i"
            >
            <img :src="rabbit" alt="">
            </div>
          </div>
        </div>
        <div class="section2_info">
          <h2>认识世界</h2>
          <div class="section2_content">
            <div
              class="content_img"
              v-for="i in 6"
              :key="i"
            >
            <img :src="bear" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Zoo',
  components: {},
  data () {
    return {
      logo: require('../assets/熊小兔.jpg'),
      banner1: require('../assets/banner1.jpg'),
      banner2: require('../assets/banner2.jpg'),
      rabbit: require('../assets/兔兔.png'),
      bear: require('../assets/熊1.png')
    }
  },
  methods: {
    onShow () {
      window.open('http://4owaa4.epub360.cn/v2/manage/book/s2o5xy/')
    }
  }
}
</script>

<style lang="less">

.main {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  .swiper {
    width: 80%;
    height: 300px;
    margin: 0 auto;
    .el-carousel__item {
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .el-carousel__item--card.is-active {
      width: 90%;
      margin-left: -20%;
    }
  }

  .zoo_section1 {
    margin: 30px 0;
    .section1_info {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      padding: 10px;
      h2 {
        font-weight: normal;
        margin-bottom: 10px;
      }
    }
    .section1_info1 {
      background: #f7e3b5;
    }
    .section1_info2 {
      background: #dbe5f1;
    }
    .section1_content {
      width: 100%;
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      .section1_item {
        width: 12%;
        img {
          height: 70px;
        }
      }
    }
  }

  .zoo_section2 {
    padding: 20px;
    background: #beccad;
    border-radius: 20px;
    display: flex;
    padding-bottom: 40px;
    .section2_info {
      width: 25%;
      padding: 0 20px;
      border-right: 2px solid #666;
      h2 {
        text-align: center;
        font-weight: normal;
      }
      .section2_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .content_img {
          background: #fff;
          width: 30%;
          height: 70px;
          margin-top: 20px;
          text-align: center;
          img{
            height: 100%;
          }
        }
      }
    }
    .section2_info:nth-child(4) {
      border-right: none;
    }
  }
}
</style>
