<template>
  <div class="detail">
    <detail-nar-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll"
            :probe-type="3" >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imageLoad"/>
      <detail-param ref="param" :goodsParam="goodsParam"></detail-param>
      <detail-common ref="comment" :commonInfo="commonInfo"></detail-common>
      <good-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addCart"/>
    <toast :message="message" :show="isShow"/>
  </div>
</template>

<script>
  import DetailNarBar from "./child/DetailNarBar";
  import DetailSwiper from "./child/DetailSwiper";
  import {getDeatil, getRecommends, Goods, GoodsParam, Shop} from "../../network/detail";
  import DetailBaseInfo from "./child/DetailBaseInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailShopInfo from "./child/DetailShopInfo";
  import DetailGoodsInfo from "./child/DetailGoodsInfo";
  import DetailParam from "./child/DetailParam";
  import DetailCommon from "./child/DetailCommon";
  import GoodList from "../../components/context/goods/GoodList";
  import {itemListener,BackTopMixin} from "../../common/mixin";
  import {debounce} from "../../common/utils";
  import DetailBottomBar from "./child/DetailBottomBar";
  import {mapActions} from 'vuex'
  import Toast from "../../components/common/toast/Toast";
  export default {
		name: "Detail",
    components: {
      Toast,
      DetailBottomBar,
      GoodList,
      DetailParam,
      DetailBaseInfo,
      DetailNarBar,
      DetailSwiper,
      Scroll,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailCommon
    },
    data(){
		  return {
		    iid: null,
        topImages: [],
        goods: {},
        shopInfo:{},
        detailInfo: {},
        goodsParam: {},
        commonInfo: {},
        recommends:[],
        themeTopYs:[],
        getTheme: null,
        currentIndex: 0,
        isShow: false,
        message: ''
      }
    },
    mixins: [itemListener,BackTopMixin],
    created() {
		  this.iid = this.$route.params.iid;
		  getDeatil(this.iid).then( res => {
		    const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo;
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.CRate !== ''){
          this.commonInfo = data.rate.list[0];
        }

      })
      getRecommends().then(res => {
        this.recommends = res.data.list
      })
      this.getTheme = debounce(()=> {
        this.themeTopYs = [];
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },100)
    },

    methods:{
		  ...mapActions(['addToCart']),
		  imageLoad(){
        this.$refs.scroll.refresh();
        this.getTheme();
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
		    let positionY = -position.y;
        let length = this.themeTopYs.length;
        for (let i = 0; i < length; i++) {
          if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart(){
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title
        product.desc = this.goods.desc;
        product.iid = this.iid;
        product.realPrice = this.goods.realPrice

        this.addToCart(product).then(res => {
          this.isShow = true;
          this.message = res;
          setTimeout(() => {
            this.isShow = false;
            this.message = ''
          },1000)
        })
      }
    },

    mounted() {

    },
    destroyed() {
		  this.$bus.$off("itemImageLoad",this.itemListen)
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 49px - 44px);
  }
</style>
