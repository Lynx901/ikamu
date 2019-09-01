<template>
	<header class="navbar">
		<router-link to="/" class="logo">
			<img src="@/assets/img/ikamu.svg" alt="logo of ikamu" />
		</router-link>

		<transition name="slide">
			<search-modal v-show="searching"
			              class="search-modal"
			              @stopSearching="searching = !searching">
			</search-modal>
		</transition>

		<nav class="nav-links">
			<div class="nav-item">
				<router-link to="/info">
					<i class="icon icon-info"
					   role="img"
					   title="Información sobre la aplicación">
					</i>
				</router-link>
			</div>
			<div class="nav-item" @click="toggleCreation">
				<i class="icon icon-upload"
				   role="img"
				   title="Subir una nueva actividad">
				</i>
			</div>
			<div class="nav-item" @click="searching = !searching">
				<i class="icon icon-search"
				   role="img"
				   title="Buscar actividades con filtros">
				</i>
			</div>
		</nav>
	</header>
</template>

<script>
	import SearchModal from '@/components/SearchModal'

	export default {
		name: "NavBar",
		components: { SearchModal },
		data() {
			return {
				searching: (window.innerWidth > 1130)
			}
		},
		methods: {
			toggleCreation() {
				this.$store.commit('activities/toggleCreation')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/theme/variables.scss';

	.navbar {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 20;
		right: 0;
		height: $navbar-height;
		background-color: $navbar-color;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 50px;

		@media (max-width: 625px) {
			padding: 0 20px;

			.can-hide {
				display: none;
			}
		}

		.logo {
			margin-top: -60px;
			height: 120px;

			img {
				height: 100%;
			}
		}

		.slide-enter-active, .slide-leave-active {
			transition: margin-top 0.3s;
		}

		.slide-enter, .slide-leave-to {
			margin-top: -$navbar-height - 150px;
		}

		.slide-enter-to, .slide-leave {
			margin-top: 0;
		}

		.nav-links {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.nav-item {
				position: relative;
				display: inline-block;
				margin-left: 50px;
				cursor: pointer;

				a {
					font-weight: 500;
					font-size: 0.9rem;
					text-decoration: none;
					line-height: 1.4rem;
					display: inline-block;
					color: $primary-color;
				}

				.icon {
					font-size: 25px;
					color: $primary-color;
				}

				@mixin activatedLink() {
					background: $secondary-color;
					background: -webkit-linear-gradient(320deg, $primary-color 0%, $secondary-color 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				@media (hover) {
					:hover {
						@include activatedLink;
					}
				}

				@media (max-width: 450px) {
					margin-left: 20px;
				}

			}
		}
	}

</style>