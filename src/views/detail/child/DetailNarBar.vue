<template>
  <div class="detail-nar-bar">
    <nar-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles" class="center-item"
             :class="{active:currentIndex === index}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
      <div slot="right" class="right"></div>
    </nar-bar>
  </div>
</template>

<script>
  import NarBar from "../../../components/common/narbar/NarBar";
	export default {
		name: "DetailNarBar",
    components: {
		  NarBar
    },
    data() {
		  return {
		    titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
		  itemClick(index){
		    this.currentIndex = index;
		    this.$emit("titleClick",index);
      },
      backClick(){
		    this.$router.back()
      }
    }
	}
</script>

<style scoped>
  .center {
    display: flex;
  }
  .center-item {
    font-size: 13px;
    flex: 1;
  }
  .back {
    margin-top: 5px;
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .active {
    color: var(--color-high-text);
  }

</style>
