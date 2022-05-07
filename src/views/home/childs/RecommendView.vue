<template>
  <div class="recommend">
    <div v-for="item in recommend" class="rec">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "RecommendView",
    props:{
		  recommend:{
		    type: Array,
        default(){
          return []
        }
      }
    }
	}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .rec {
    margin-top: 10px;
  }
  .rec img {
    flex: 1;
    width: 70px;
    height: 70px;
    margin: 0 5px 10px 5px;
  }
</style>
