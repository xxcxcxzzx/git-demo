<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
	export default {
		name: "Toast",
    props: {
		  message: {
		    type: String,
        default: ''
      },
      show: {
		    type: Boolean,
        default: false
      }
    }
	}
</script>

<style scoped>
  @keyframes fadeOut{
    0%{
      opacity: 1;
    }
    50% {
      opacity: .4;
    }
    100% {
      opacity: 0;
    }
  }
  .toast {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.7);
    width: 100px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    transform: translateX(-50%);
    color: #fff;
    animation: fadeOut 5s;
  }
</style>
