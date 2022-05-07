<template>
  <div id="home">
    <nar-bar>
      <div slot="center" class="home-nar">美丽说</div>
    </nar-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"
                 @tabClick="tabClick" v-show="isTabControl" ref="tabControl1"/>
      <scroll class="content" ref="scroll" @scroll="scrollContent"
              :probe-type="2"
              :pull-up-load="true"
              @pullingUp="loadMore">
          <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
          <recommend-view :recommend="recommend"></recommend-view>
          <FeatureView/>
          <tab-control :titles="['流行','新款','精选']"
                       @tabClick="tabClick" ref="tabControl2"/>
          <good-list :goods="showGoods"></good-list>
      </scroll>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
  </div>
</template>
<script>
  import NarBar from "../../components/common/narbar/NarBar"
  import HomeSwiper from "./childs/HomeSwiper";
  import RecommendView from "./childs/RecommendView";
  import FeatureView from "./childs/FeatureView";
  import TabControl from "../../components/context/tabcontrol/TabControl";
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import GoodList from "../../components/context/goods/GoodList";
  import Scroll from "../../components/common/scroll/Scroll";
  import {itemListener,BackTopMixin} from "../../common/mixin";
  export default {
		name: "Home",
    data() {
		  return {
        banner: [],
        recommend: [],
        goods: {
		      'pop':{page:0,list:[]},
		      'new':{page:0,list:[]},
		      'sell':{page:0,list:[]}
        },
        currentType: 'pop',
        isShowTop: false,
        tabControlTop: 0,
        saveY: 0
      }
    },
    mixins: [itemListener,BackTopMixin],
    components: {
      GoodList,
		  NarBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Scroll,
    },
    activated() {
		  this.$refs.scroll.refresh();
		  this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
		  this.saveY = this.$refs.scroll.scroll.y;
		  this.$bus.$off("itemImageLoad",this.itemListen)
    },
    created(){
		  this.getHomeMultidata();
		  this.getHomeGoods('pop')
		  this.getHomeGoods('new')
		  this.getHomeGoods('sell')
    },
    mounted(){
    },
    computed:{
		  showGoods(){
		    return this.goods[this.currentType].list;
      }
    },
    methods: {
		  tabClick(index){
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
      },
      scrollContent(position){
		    this.isShowTop = (-position.y) > 1000
        this.isTabControl = (-position.y) > this.tabControlTop
      },
		  getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type){
		    const page = this.goods[type].page + 1;
		    getHomeGoods(type,page).then(res => {
		      this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
		      this.$refs.scroll.finishPullUp();
        })
      }
    }
	}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
    /*padding-top: 44px;*/
  }
  .home-nar {
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: white;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
  }
  .tab-control {
    position: relative;
    z-index: 2;
    background-color: white;
  }
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
