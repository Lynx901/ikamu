<template>
	<div id="app">
		<NavBar></NavBar>
		<router-view class="content"/>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar'

	export default {
		components: { NavBar }
	}
</script>

<style lang="scss">
	@import '@/theme/variables.scss';

	* {
		margin: 0;
		padding: 0;
	}

	body {
		margin: 0;

		a {
			font-weight: 500;
			text-decoration: none;
		}

		#app {
			font-family: -apple-system, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-size: 16px;
			color: #2c3e50;

			.content {
				margin-top: $navbar-height;
				padding: 30px 50px;

				@media (max-width: 625px) {
					padding: 30px 20px;
				}
			}
		}
	}
</style>

