import {debounce} from "./utils";
import BackTop from "../components/common/backtop/BackTop";

export const itemListener = {
  data(){
    return {
      itemListen: null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh)
    this.itemListen = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad",this.itemListen)
  }
}
export const BackTopMixin = {
  components: {
    BackTop
  },
  data(){
    return {
      isTabControl: false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
  }
}
