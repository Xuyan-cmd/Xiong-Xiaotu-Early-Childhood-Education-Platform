<template>
  <div class="ZooInfo">
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
      <div class="zooInfo_box">
        <el-row :gutter="30">
          <el-col :span="18">
            <div class="zoo_info_content">
            </div>
          </el-col>
          <el-col :span="6">
            <div class="zoo_info_desc">
              <div class="desc_content">
                <h2>游戏简介</h2>
                <p>游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详组玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法游戏介绍的详细玩法 </p>
              </div>
              <div class="desc_line"></div>
              <div class="desc_comment">
                <h2>游戏评价</h2>
                <el-rate
                  v-model="gameScore"
                  :colors="colors"
                  void-color="#bb3e3e"
                ></el-rate>
                <div class="user_info">
                  <i class="el-icon-user"></i>
                  <p>游戏评价游戏评价</p>
                </div>
                <div class="user_info">
                  <i class="el-icon-user"></i>
                  <p>游戏评价游戏评价</p>
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
  name: 'ZooInfo',
  components: {},
  data () {
    return {
      gameScore: 0,
      colors: ['#bb3e3e', '#bb3e3e', '#bb3e3e'],
      logo: require('../assets/熊小兔.jpg')
    }
  }
}
</script>

<style lang="less">
.zooInfo_box {
  height: 500px;
  .zoo_info_content {
    height: 500px;
    background: #fff;
  }
  .zoo_info_desc {
    height: 500px;
    border-left: 2px solid #f4b7c6;
    .desc_content {
      padding: 10px 30px;
      h2 {
        margin-bottom: 20px;
        font-weight: normal;
      }
      p {
        font-size: 12px;
        text-align: justify;
      }
    }
    .desc_line {
      width: 100%;
      height: 2px;
      background: #f4b7c6;
      margin-top: 40px;
    }
    .desc_comment {
      padding: 10px 30px;
      h2 {
        margin-bottom: 20px;
        font-weight: normal;
      }
      .user_info {
        margin-top: 20px;
        display: flex;
        i {
          width: 30px;
          height: 30px;
          background: #c4c4c4;
          color: #fff;
          text-align: center;
          border-radius: 50%;
          line-height: 30px;
          margin-right: 10px;
          font-weight: 600;
        }
        p {
          line-height: 30px;
        }
      }
    }
  }
}

.el-rate__icon {
  font-size: 28px;
  margin-top: -15px;
}
</style>
