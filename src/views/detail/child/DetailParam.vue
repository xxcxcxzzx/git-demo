<template>
  <div class="param-info" v-if="Object.keys(goodsParam).length !== 0">
    <table v-for="(table, index) in goodsParam.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in goodsParam.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailParam",
    props: {
		  goodsParam:{
		    type: Object,
        default(){
		      return {}
        }
      }
    }
	}
</script>

<style scoped>
  .param-info {
    font-size: 14px;
    margin-left: 5px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  tr {
    width: 30px;
    height: 30px;
  }
  td {
    margin-left: 10px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-value {
    color: var(--color-high-text);
  }
</style>
