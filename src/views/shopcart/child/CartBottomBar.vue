<template>
  <div class="cart-bottom-bar">
    <check-button class="select-all" :is-checked="isChecked" @click.native="checkClick"></check-button>
    <span>全选</span>
    <div class="total">合计:{{totalPrice}}</div>
    <div class="cacl">
      去计算({{countLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/common/checkbutton/CheckButton";
  import {mapGetters} from "vuex";
	export default {
		name: "CartBottomBar",
    components: {
		  CheckButton
    },
    computed:{
		  ...mapGetters(['cartList']),
		  totalPrice(){
		    return "￥" + this.cartList.filter(item => {
		      return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.realPrice * item.count
        },0).toFixed(2)
      },
      countLength(){
		    return this.cartList.filter(item => item.checked).reduce((preValue,item)=>{
		      return preValue + item.count
        },0)
      },
      isChecked(){
		    if (this.cartList.length === 0) return false;
		    return !this.cartList.find(item => !item.checked)
      }
    },
    methods:{
		  checkClick(){
		    if (this.isChecked){
		      return this.cartList.forEach(item => item.checked = false)
        }else {
          return this.cartList.forEach(item => item.checked = true)
        }
      }
    }
	}
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    line-height: 40px;
    position: relative;
    display: flex;
    box-sizing: border-box;
    background-color: #999999;
    color: white;
    font-size: 14px;
  }
  .select-all {
    position: absolute;
    top: 10px;
    left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 33px;
    text-align: center;
    font-size: 14px;
  }
  .total {
    flex: 1;
    margin-left: 20px;
  }
  .cacl {
    width: 80px;
    text-align: center;
    background-color: red;
  }
</style>
