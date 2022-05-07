<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TarBar"
	}
</script>

<style scoped>
  #tar-bar {
    z-index: 9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 1px -5px 10px rgba(100,100,100,.3);
    background-color: #eeeeee;
  }

</style>
