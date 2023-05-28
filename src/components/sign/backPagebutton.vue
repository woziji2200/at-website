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
    width: 90px;
    height: 30px;
    text-align: center;
    box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
    border-radius: 12px;
}
.back-letter{
    line-height: 30px;
    color: #FFFFFF;
    font-weight: bold;
}
.back-bottom{
    margin: auto;
    margin-top: -3px;
    width: 50px;
    height: 1px;
    background-color: #FFFFFF;
}
</style>
