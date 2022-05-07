<template>
  <div class="detail-common" v-if="Object.keys(commonInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commonInfo.user.avatar" alt="">
      <span>{{commonInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commonInfo.content}}</p>
      <div class="info-other">
        <span class="data">{{commonInfo.created | showDate}}</span>
        <span>{{commonInfo.style}}</span>
      </div>
      <div class="info-images">
        <img :src="item" alt="" v-for="item in commonInfo.images" :key="item" class="info-images-item">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
		name: "DetailCommentInfo",
    props: {
      commonInfo: {
        type: Object,
        default: {}
      }
    },
    filters:{
      showDate(value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
	}
</script>

<style scoped>
  .detail-common {
    margin-bottom: 20px;
    font-size: 12px;
  }
  .info-header {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
  }
  .info-header .header-title {
    float: left;
  }
  .info-header .header-more{
    float: right;
  }
  .info-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-images-item {
    width: 80px;
    height: 80px;
    margin-right: 5px;
  }
  .info-other {
    margin: 10px 0;
  }
  .info-other span {
    padding: 0 14px;
  }
</style>
