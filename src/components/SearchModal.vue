<template>
	<aside class="search-container">
		<i class="icon icon-close-cross close-button" title="Discard the search" @click="$emit('stopSearching')"></i>
		<div class="input-container">
			<i class="icon icon-search"></i>
			<input type="text" placeholder="Buscar por nombre..." class="input-field" @change="$emit('nameSearch', $event.target.value)">
		</div>
		<section class="filters">
			<div class="filter">
				<label for="selector-participants"><i class="icon icon-people"></i></label>
				<select id="selector-participants" class="filter-selector">
					<option selected value="">Participants</option>
					<option>1-5 participants</option>
					<option>5-10 participants</option>
					<option>+10 participants</option>
				</select>
			</div>
			<div class="filter">
				<label for="selector-duration"><i class="icon icon-time"></i></label>
				<select id="selector-duration" class="filter-selector">
					<option selected value="">Duration</option>
					<option>< 30min</option>
					<option>30min - 1h</option>
					<option>1h - 2h</option>
					<option>+2h</option>
				</select>
			</div>
			<div class="filter">
				<label for="selector-category"><i class="icon icon-categories"></i></label>
				<select id="selector-category" class="filter-selector">
					<option selected value="">Category</option>
					<option>Para conocerse</option>
					<option>Pruebas pequeñas</option>
					<option>De pensar</option>
					<option>Pasar el rato</option>
					<option>De confianza</option>
					<option>Por equipos</option>
					<option>Reflexiones</option>
				</select>
			</div>
		</section>
	</aside>
</template>

<script>
	export default {
		methods: {
			discardSearch () {
				console.log("discarding");
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/theme/variables.scss';

	.search-container {
		z-index: 2;
		position: relative;
		height: 100%;
		background: $primary-color;
		background: linear-gradient(320deg, $primary-color 0%, $secondary-color 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px 20px 5px;

		.close-button {
			color: white;
			font-size: 15px;
			position: absolute;
			top: 30px;
			right: 20px;
			cursor: pointer;
		}

		.input-container {
			display: flex;
			align-items: center;
			padding-right: 50px;
			margin-bottom: 20px;

			.icon-search {
				color: white;
				font-size: 15px;
				margin-top: 5px;
				margin-right: 12px;
			}

			.input-field {
				width: 100%;
				border: 0;
				background: transparent;
				font-size: 32px;
				color: white;
				outline: none;

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
				}

				&:focus {
					margin-bottom: -2px;
					border-bottom: 2px solid white;
				}
			}
		}

		.filters {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;

			.filter {
				padding: 10px;
				background-color: rgba(255, 255, 255, 0.5);
				border-radius: 2px;
				font-size: 12px;
				font-weight: bold;
				color: white;
				margin-right: 10px;
				margin-bottom: 5px;
				display: flex;
				align-items: center;

				&:last-child {
					margin-right: -1px;
				}

				.icon {
					margin-right: 7px;
				}

				.filter-selector {
					line-height: 32px;
					cursor: pointer;
					border: none;
					border-radius: 0;
					background-color: transparent;
					font-weight: bold;
					color: white;
					outline: none;

					&:focus {
						margin-bottom: -2px;
						border-bottom: 2px solid white;
					}
				}
			}
		}
		@media (max-width: 1130px) {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}
	}
</style>
