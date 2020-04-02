<template>
	<div id="nav">
		<header>
			<slot name="header">
				<a @click="$router.go(-1)">&lt;</a>
				<router-link to="/">{{rightBtnName}}</router-link>
			</slot>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		rightBtnName: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#nav {
		position:relative;
		height:52px;
		line-height:52px;
		padding:0 30px;
		box-sizing:border-box;
		background: transparent;

		a {
			width:30px;
			height:52px;
			text-decoration:none;
			color: #2c3e50;
			font-size: 0.9rem;
			position:absolute;
			left:0;
		
			&.router-link-active {
				left: initial;
				right: 0;
			}
		}

		&.typeA {
			a {
				display:none;
				&.router-link-active {
					display:block;
				}
			}
		}

		&.typeB {
			a {
				display:block;
				&.router-link-active {
					display:none;
				}
			}

		}
  	}
</style>
