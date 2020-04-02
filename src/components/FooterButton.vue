<template>
	<div class="footerButton">
		<footer>
			<slot name="foot">
				<router-link to="/">다음</router-link>
			</slot>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'FooterButton',
	props: {
		buttonName: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footerButton {
		
		position:fixed;
		bottom:20px;
		left:20px;
		right:20px;
	a {
		display: inline-block;
		width:100%;
		line-height: 52px;
		height: 52px;
		background: #333;
		border-radius: 5px;
		color: #fff;
		text-decoration:none;
		box-sizing:border-box;
	}

	&.is-disabled {

		a {
			background:#d6d6d6;
			color:#fff;
		}
	}
	&.typeA {

		a {

			background:#fff;
			border:1px solid #666;
			color:#333;
		}
	}
	&.typeC {
		bottom:300px;
		left:0;
		right:0;
		a {
			
			border-radius: 0;
			border:none;
			background:#333;
			color:#fff;
		}
	}

	&.typeD {
		a {
			width:49%;
			float:right;
		}
		a:first-child {
			float:left;

			background:#fff;
			border:1px solid #666;
			color:#333;
		}
	}
}
</style>
