<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import {mapGetters} from 'vuex'
  import CartListItem from "./CartListItem";
	export default {
		name: "CartList",
    components: {
		  Scroll,
      CartListItem
    },
    computed:{
		  ...mapGetters(['cartList'])
    }
	}
</script>

<style scoped>
  .cart-list {
    height: calc(100vh - 93px - 40px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
