<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "TarBarItem",
    props: {
		  path: String
    },
    data(){
		  return {

      }
    },
    computed: {
		  isActive(){
		    return this.$route.path.indexOf(this.path) !== -1;
      }
    },
    methods: {
		  itemClick(){
		    this.$router.push(this.path)
      }
    }
	}
</script>

<style scoped>
  .tar-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
  }
  .tar-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>
