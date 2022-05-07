<template>
  <div class="check-button">
    <img src="../../../assets/img/tick.svg" alt="" :class="{check: isChecked}">
  </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props:{
		  isChecked: {
		    type: Boolean,
        default: true
      }
    }
	}
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    border-color: red;
    border-radius: 50%;
    background-color: #ff5777;
  }
</style>
