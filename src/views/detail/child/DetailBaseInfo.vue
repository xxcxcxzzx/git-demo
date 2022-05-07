<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="into-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price"><s>{{goods.oldPrice}}</s></span>
      <span v-if="goods.disCount" class="discount">{{goods.disCount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-services-item" v-for="index in goods.services.length - 1">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
    props: {
		  goods:{
		    type: Object,
      }
    }
	}
</script>

<style scoped>
  .into-title {
    font-size: 16px;
    color: #333;
  }
  .info-price {
    margin-top: 20px;
    position: relative;
  }
  .n-price {
    color: #f13e3a;
    font-size: 19px;
  }
  .o-price {
    font-size: 13px;
  }
  .discount {
    position: absolute;
    top: -14px;
    left: 110px;
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    background-color: #ff5777;
  }
  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-service img {
    width: 14px;
    height: 14px;
  }
  .info-service span {
    font-size: 13px;
    color: #333;
  }
</style>
