<template>
	<div class="tabs-details"><slot></slot></div>
</template>

<script>

export default {
	name: 'tab',

	props: {
		name: {
			required: true
		}
	},

	selected: {
		default: false
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
