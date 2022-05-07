<template>
  <div class="detail-swiper">
    <swiper class="swiper-content">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
        <div>{{item.title}}</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper"
	export default {
		name: "DetailSwiper",
    components: {
		  SwiperItem,
      Swiper
    },
    props: {
		  topImages:{
		    type: Array,
        default: []
      }
    }
	}
</script>

<style scoped>
  .swiper-content {
    height: 300px;
  }
</style>
