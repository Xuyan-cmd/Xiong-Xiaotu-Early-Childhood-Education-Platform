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
          <router-link
            :to="'/'"
            class="select"
          >首页</router-link>
        </li>
        <li>
          <router-link :to="'/zoo'">熊兔动物园</router-link>
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
            <img
              :src="banner1"
              alt=""
            >
          </el-carousel-item>
          <el-carousel-item>
            <img
              :src="banner2"
              alt=""
            >
          </el-carousel-item>
          <el-carousel-item>
            <img
              :src="banner1"
              alt=""
            >
          </el-carousel-item>
          <el-carousel-item>
            <img
              :src="banner2"
              alt=""
            >
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="tips_wrap">
        <el-row :gutter="50">
          <el-col :span="9">
            <div class="section section1">
              <h2>教育游戏</h2>
              <div class="section1_content">
                <div class="section1_left">
                  <div
                    class="section1_info"
                    v-for="item in 9"
                    :key="item"
                  >
                    <img :src="rabbit" alt="">
                  </div>
                </div>
                <div class="section1_right">
                  <div class="section_img">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                  <div class="section_img">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                   <div class="section_img">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                  <div class="section_img">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                   <div class="section_img">
                    <img
                      :src="rabbit"
                      alt=""
                    >
                  </div>
                  <div class="section_img">
                    <img
                      :src="bear"
                      alt=""
                    >
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="section section2">
              <h2>今日推荐</h2>
              <div class="section2_content">
                <div class="section_info" @click="onShow">
                  <i class="el-icon-view"></i>
                  <a href="#">父母必读丨你真的了解赏识教育吗？你真的会表扬孩子吗？</a>
                </div>
                <div class="section_info">
                  <i class="el-icon-basketball"></i>
                  <a href="#">文章标题文章标题</a>
                </div>
                <div class="section_info">
                  <i class="el-icon-circle-check"></i>
                  <a href="#">文章标题文章标题文章标题</a>
                </div>
                <div class="section_info">
                  <i class="el-icon-collection-tag"></i>
                  <a href="#">文章标题文章标题文章标题</a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="section section3">
              <h2>微信公众平台</h2>
              <img
                :src=codeImg
                alt=""
              >
            </div>
          </el-col>
        </el-row>
      </div>

      <hr>

      <div class="recommend_wrap">
        <h2>好物推荐</h2>

        <el-row :gutter="50">
          <el-col :span="12">
            <div class="recommend_box recommend_box_line">
              <div class="recommend_info">
                <div class="info_img">
                  <img
                    :src="goodsImg"
                    alt=""
                  >
                </div>
                <div class="info_text">
                  <el-rate
                    v-model="recommendScore"
                    disabled
                    show-score
                    text-color="#666"
                  ></el-rate>
                  <p class="price">$13.95</p>
                  <p class="text">
                    Lee Pucker design. UI staminia shoesfor handsome designers. Worldwideshipping.Brown theme leather.
                  </p>
                  <div class="info_tips">
                    <span>Remove</span>
                    <!-- <el-button  plain size="mini" >Remove</el-button> -->
                    <el-button
                      type="primary"
                      plain
                      size="mini"
                      icon="el-icon-folder-add"
                    >Save For Later</el-button>
                    <el-button
                      type="warning"
                      size="small"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                </div>
              </div>
              <div class="recommend_info">
                <div class="info_img">
                  <img
                    :src="goodsImg"
                    alt=""
                  >
                </div>
                <div class="info_text">
                  <el-rate
                    v-model="recommendScore"
                    disabled
                    show-score
                    text-color="#666"
                  ></el-rate>
                  <p class="price">$13.95</p>
                  <p class="text">
                    Lee Pucker design. UI staminia shoesfor handsome designers. Worldwideshipping.Brown theme leather.
                  </p>
                  <div class="info_tips">
                    <span>Remove</span>
                    <!-- <el-button  plain size="mini" >Remove</el-button> -->
                    <el-button
                      type="primary"
                      plain
                      size="mini"
                      icon="el-icon-folder-add"
                    >Save For Later</el-button>
                    <el-button
                      type="warning"
                      size="small"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="recommend_box ">
              <div class="recommend_info">
                <div class="info_img">
                  <img
                    :src="goodsImg"
                    alt=""
                  >
                </div>
                <div class="info_text">
                  <el-rate
                    v-model="recommendScore"
                    disabled
                    show-score
                    text-color="#666"
                  ></el-rate>
                  <p class="price">$13.95</p>
                  <p class="text">
                    Lee Pucker design. UI staminia shoesfor handsome designers. Worldwideshipping.Brown theme leather.
                  </p>
                  <div class="info_tips">
                    <span>Remove</span>
                    <!-- <el-button  plain size="mini" >Remove</el-button> -->
                    <el-button
                      type="primary"
                      plain
                      size="mini"
                      icon="el-icon-folder-add"
                    >Save For Later</el-button>
                    <el-button
                      type="warning"
                      size="small"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                </div>
              </div>
              <div class="recommend_info">
                <div class="info_img">
                  <img
                    :src="goodsImg"
                    alt=""
                  >
                </div>
                <div class="info_text">
                  <el-rate
                    v-model="recommendScore"
                    disabled
                    show-score
                    text-color="#666"
                  ></el-rate>
                  <p class="price">$13.95</p>
                  <p class="text">
                    Lee Pucker design. UI staminia shoesfor handsome designers. Worldwideshipping.Brown theme leather.
                  </p>
                  <div class="info_tips">
                    <span>Remove</span>
                    <!-- <el-button  plain size="mini" >Remove</el-button> -->
                    <el-button
                      type="primary"
                      plain
                      size="mini"
                      icon="el-icon-folder-add"
                    >Save For Later</el-button>
                    <el-button
                      type="warning"
                      size="small"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      recommendScore: 4.85,
      codeImg: require('../assets/code.png'),
      logo: require('../assets/熊小兔.jpg'),
      banner1: require('../assets/banner1.jpg'),
      banner2: require('../assets/banner2.jpg'),
      goodsImg: require('../assets/item1.jpg'),
      rabbit: require('../assets/兔兔.png'),
      bear: require('../assets/熊1.png')
    }
  },
  methods: {
    onShow () {
      window.open('https://mp.weixin.qq.com/s/PjGegqEcxoWzZeZYWZ_I5A')
    }
  }
}
</script>

<style lang="less">
.header {
  width: 100%;
  height: 100px;
  background: #f4b7c6;
  padding: 10px 40px;
  .logo {
    display: flex;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .logo_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 24px;
      }
      h3 {
        font-size: 16px;
      }
    }
  }

  .search {
    width: 70%;
    height: 50px;
    margin-top: 2%;
    border-radius: 30px;
    background: #e3d7d7;
    position: relative;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: #999;
      font-size: 24px;
    }
    input {
      box-sizing: border-box;
      width: 90%;
      height: 100%;
      line-height: 50px;
      border: none;
      outline: none;
      padding: 0 10px;
      background: transparent;
      color: #999;
      font-size: 18px;
    }
  }
  .head_right {
    display: flex;
    align-items: center;
    a {
      display: block;
      height: 100%;
      line-height: 70px;
      color: #999;
      font-size: 18px;
      margin: 0 10px;
    }
    .icon_user {
      width: 50px;
      height: 50px;
      background: #c4c4c4;
      border-radius: 50%;
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      i {
        color: #fff;
        font-size: 30px;
      }
    }
  }
}

.nav {
  width: 100%;
  height: 50px;
  background: #f4b7c6;
  padding: 0 20px;
  padding-top: 10px;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    li {
      width: 20%;
      height: 40px;
      line-height: 40px;
      list-style: none;
    }
  }
  a {
    display: block;
    width: 70%;
    margin: 0 auto;
    text-decoration: none;
    color: #000;
    font-size: 18px;
    text-align: center;
    transition: 0.1s;
  }
  a:hover {
    border-radius: 15px 15px 0 0;
    background: #faeff3;
  }
  .select {
    border-radius: 15px 15px 0 0;
    background: #faeff3;
  }
}

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
      img {
        width: 100%;
        height: 100%;
      }
    }
    .el-carousel__item--card.is-active {
      width: 90%;
      margin-left: -20%;
    }
  }

  .tips_wrap {
    margin: 30px 0;
    .section {
      border-radius: 20px;
      padding: 10px;
      height: 300px;
      h2 {
        text-align: center;
        font-weight: 500;
        margin-bottom: 20px;
      }
    }
    .section1 {
      background: #f7e3b5;
    }
    .section2 {
      background: #cee0f0;
    }
    .section3 {
      background: #d0dcdd;
      text-align: center;
      img {
        width: 70%;
        margin: 0 auto;
      }
    }

    .section1_content {
      display: flex;
      .section1_left {
        display: flex;
        width: 60%;
        height: 220px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .section1_info {
          width: 28%;
          height: 28%;
          border-radius: 10px;
          text-align: center;
          img{
            height: 100%;
          }
        }
      }
      .section1_right {
        width: 40%;
        height: 220px;
        border-left: 3px solid #f4b820;
        margin-left: 20px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .section_img {
          width: 50%;
          height: 28%;
          img {
            height: 100%;
          }
        }
      }
    }

    .section2_content {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .section_info {
        margin-bottom: 20px;
      }
      i {
        font-size: 20px;
        margin-right: 10px;
      }
      a {
        font-size: 20px;
        color: #000;
        text-decoration: none;
      }
    }
  }

  .recommend_wrap {
    width: 100%;
    h2 {
      font-weight: normal;
      margin-bottom: 10px;
    }

    .recommend_box_line {
      border: 2px dashed #cda4f7;
      border-radius: 10px;
    }

    .recommend_info {
      width: 100%;
      padding: 20px;
      margin-bottom: 20px;
      display: flex;
      .info_img {
        width: 40%;
        height: 130px;
        background: #fff;
        margin-right: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info_text {
        width: 60%;
        position: relative;
        .price {
          position: absolute;
          top: -5px;
          right: 0;
          font-size: 20px;
          font-weight: 600;
        }
        .text {
          line-height: 1.8;
          margin: 10px 0;
        }
        .info_tips {
          float: right;
          margin-top: 10px;
          span {
            margin-right: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
