<template>
  <div class="community">
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
          <router-link :to="'/zoo'">熊兔动物园</router-link>
        </li>
        <li>
          <router-link
            :to="'/community'"
            class="select"
          >社区广场</router-link>
        </li>
        <li><a href="#">推荐阅读</a></li>
        <li><a href="#">育儿商城</a></li>
      </ul>
    </div>

    <div class="main">
      <div class="community_box">
        <el-row :gutter="30">
          <el-col :span="5">
            <div class="community_left">
              <div class="left_section1 br bg">
                <div class="section_info1">
                  <div class="info_item">
                    <i class="el-icon-s-operation"></i>
                    全部关注
                  </div>
                  <div class="info_item">
                    <i class="el-icon-star-off"></i>
                    最新动态
                  </div>
                  <div class="info_item">
                    <i class="el-icon-user-solid"></i>
                    好友圈
                  </div>
                </div>
              </div>

              <div class="left_section2 br bg">
                <h2>大家都在关注：</h2>
                <ul>
                  <li
                    v-for="i in 7"
                    :key="i"
                  ><a href="#">词条{{ i}}</a></li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="community_mid">
              <div class="mid_section1 bg br">
                <div class="mid_input_box">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="今天有什么和孩子发生的趣事吗"
                    resize="none"
                    v-model="textarea"
                  >
                  </el-input>
                </div>
                <div class="input_btn">
                  <div class="btn_list">
                    <a href="#"><i class="iconfont icon-heart"></i></a>
                    <a href="#"><i class="iconfont icon-zhaopian"></i></a>
                    <a href="#"><i class="iconfont icon-shipin"></i></a>
                    <a href="#"><i class="iconfont icon-aite"></i></a>
                    <a href="#"><i class="iconfont icon-hashjinghao"></i></a>
                    <a href="#"><i class="iconfont icon-androidgengduo"></i></a>
                  </div>
                  <a
                    href="#"
                    class="send_btn"
                  >发送</a>
                </div>
              </div>
              <div class="mid_section2 bg br">
                <a href="#">全部</a>
                <a href="#">成长社区</a>
                <a href="#">爸妈帮帮</a>
                <a href="#">我的社区</a>
                <a href="#">群消息</a>
              </div>
              <div class="mid_section3 bg br">
                <div class="mid_user">
                  <i class="el-icon-user"></i>
                </div>
                <div class="mid_more">
                  <i class="el-icon-arrow-down"></i>
                </div>
                <div class="mid_desc">
                  <h3>兔乖乖日记本</h3>
                  <span>2分钟之前</span>
                  <p>
                    文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述
                  </p>
                  <el-row :gutter="10">
                    <el-col :span="6">
                      <div class="desc_img">
                        <img :src="rabbit" alt="">
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="desc_img">
                        <img :src="rabbit" alt="">
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="desc_img">
                        <img :src="rabbit" alt="">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="community_right">
              <div class="right_section bg br">
                <h2>消息</h2>

                <div class="icon_msg">
                  <img src="../assets/icon_msg.png" alt="">
                </div>

                <div class="message_info">
                  <div class="icon_user">
                    <i class="el-icon-user"></i>
                  </div>
                  <div class="message_text">
                    <h3>昵称</h3>
                    <p>信息提醒提示</p>
                  </div>
                </div>
                 <div class="message_info">
                  <div class="icon_user">
                    <i class="el-icon-user"></i>
                  </div>
                  <div class="message_text">
                    <h3>昵称</h3>
                    <p>信息提醒提示</p>
                  </div>
                </div>
                 <div class="message_info">
                  <div class="icon_user">
                    <i class="el-icon-user"></i>
                  </div>
                  <div class="message_text">
                    <h3>昵称</h3>
                    <p>信息提醒提示</p>
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
  name: 'Community',
  components: {},
  data () {
    return {
      textarea: '',
      logo: require('../assets/熊小兔.jpg'),
      rabbit: require('../assets/兔兔.png')
    }
  }
}
</script>

<style lang="less">
.community_box {
  .br {
    border-radius: 15px;
  }
  .bg {
    background: #f7d5de;
  }
  .community_left {
    .left_section1 {
      padding: 20px;
      height: 200px;
      margin-bottom: 20px;
      .info_item {
        color: #666;
        font-size: 22px;
        margin-bottom: 15px;
      }
      i {
        font-size: 22px;
        margin-right: 10px;
      }
    }
    .left_section2 {
      padding: 20px;
      height: 350px;
      h2 {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 20px;
      }
      ul {
        padding-left: 20px;
        li {
          list-style: disc;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }
  }
  .community_mid {
    .mid_section1 {
      padding: 20px;
      height: 200px;
      margin-bottom: 20px;
      textarea {
        box-sizing: border-box;
        height: 130px;
        padding: 10px;
        font-size: 20px;
        color: #f9669b;
        background: #faeff2;
        border: none;
        border-radius: 10px;
      }
      /* 推荐 */
      .el-input ::-webkit-input-placeholder {
        color: #f9669b;
        font-weight: 600;
      }
      /* 添加关键词 !important */
      ::-webkit-input-placeholder {
        font-weight: 600;
        color: #f9669b !important;
      }

      .input_btn {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .send_btn {
          width: 90px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #d4c9dc;
          font-weight: 600;
          border-radius: 20px;
        }
        .btn_list {
          a {
            margin-right: 20px;
            i {
              font-size: 24px;
              color: #666;
            }
          }
        }
      }
    }

    .mid_section2 {
      height: 50px;
      margin-bottom: 20px;
      display: flex;
      padding: 0 40px;
      align-items: center;
      justify-content: space-between;
      a:nth-child(1) {
        color: #f9669b;
      }
      a {
        font-size: 18px;
        color: #666;
      }
      a:hover {
        color: #f9669b;
      }
    }

    .mid_section3 {
      height: 280px;
      padding: 20px;
      position: relative;
      .mid_user {
        position: absolute;
        top: 20px;
        left: 20px;
        i {
          width: 60px;
          height: 60px;
          background: #c4c4c4;
          border-radius: 50%;
          text-align: center;
          line-height: 60px;
          font-size: 30px;
          color: #fff;
        }
      }
      .mid_more {
        position: absolute;
        top: 20px;
        right: 40px;
        i {
          color: #666;
          font-size: 30px;
        }
      }
      .mid_desc {
        padding: 0 80px;
        h3 {
          font-weight: normal;
        }
        span {
          font-size: 12px;
          color: #999;
        }
        p {
          font-weight: 600;
          margin: 20px 0;
          font-size: 14px;
        }
        .desc_img {
          width: 100px;
          height: 100px;
          background: #fff;
          text-align: center;
          img{
            height: 100%;
          }
        }
      }
    }
  }

  .community_right {
    .right_section {
      height: 570px;
      position: relative;
      h2 {
        padding: 20px;
        font-weight: normal;
      }
    }
    .icon_msg{
      position: absolute;
      right: 10px;
      top: 20px;
      img{
        width: 60px;
      }
    }
    .message_info {
      padding: 0 20px;
      border-bottom: 2px solid #b72f2f;
      display: flex;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }
    .message_text{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    p{
      font-size: 14px;
      }
    .icon_user {
      margin-right: 10px;
      i {
        width: 50px;
        height: 50px;
        background: #c4c4c4;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
</style>
