<template>
  <div class="good-list-item">
    <img v-lazy="showImage" alt="" @load="itemLoad" @click="itemClick">
    <div class="good-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "GoodListItem",
    props: {
		  goodsItem: Object,
      default(){
		    return {}
      }
    },
    methods:{
		  itemLoad(){
		    this.$bus.$emit("itemImageLoad")
      },
      itemClick(){
		    this.$router.push('/detail/' + this.goodsItem.iid);
      }
    },
    computed: {
		  showImage(){
		    return this.goodsItem.image || this.goodsItem.show.img
      }
    }
	}
</script>

<style scoped>
  .good-list-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .good-info .cfav {
    position: relative;
  }
  .good-info .cfav::after{
    content: '☆';
    position: absolute;
    top: 0;
    left: -11px;
  }
</style>
