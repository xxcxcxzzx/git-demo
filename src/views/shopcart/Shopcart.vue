<template>
  <div class="shopCart">
    <nar-bar>
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nar-bar>
    <cart-list class="cart-list"/>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NarBar from "../../components/common/narbar/NarBar";
  import {mapGetters} from 'vuex'
  import CartList from "./child/CartList";
  import CartBottomBar from "./child/CartBottomBar";
	export default {
		name: "Shopcart",
    components: {
		  NarBar,
      CartList,
      CartBottomBar
    },
    computed: {
		  ...mapGetters(['cartLength'])
    }
	}
</script>

<style scoped>
  .center {
    background-color: var(--color-tint);
    color: white;
  }
</style>
