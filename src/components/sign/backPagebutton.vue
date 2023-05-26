<template>
  <div>
      <div class="backGround">
          <div class="back-letter">返回主页</div>
          <div class="back-bottom"></div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.backGround{
    background-color: #007AFF;
    width: 6.1vw;
    height: 2.4vw;
    text-align: center;
    box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
    border-radius: 0.9vw;
}
.back-letter{
    line-height: 2.4vw;
    color: #FFFFFF;
    font-weight: bold;
}
.back-bottom{
    margin: auto;
    margin-top: -5px;
    width: 4.1vw;
    height: 0.11vw;
    background-color: #FFFFFF;
}
</style>
