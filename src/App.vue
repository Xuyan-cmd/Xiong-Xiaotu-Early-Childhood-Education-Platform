<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
div {
  box-sizing: border-box;
}
html {
  background: #faeff3;
}
a {
  color: #000;
  text-decoration: none;
}
hr{
  margin-bottom: 20px;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 15px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #f4b7c6;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: #fff;
}
</style>
