<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
	export default {
		name: "HomeSwiper",
    props: {
		  banner: Array
    },
    data(){
		  return {
		    load: false
      }
    },
    components: {
		  Swiper,
      SwiperItem
    },
    methods:{
		  imageLoad(){
		    if (!this.load){
		      this.$emit("swiperImageLoad")
          this.load = true
        }
      }
    }
	}
</script>

<style scoped>

</style>
