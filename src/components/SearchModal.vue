<template>
	<aside class="search-container">
		<i class="icon icon-close-cross close-button" title="Discard the search" @click="$emit('stopSearching')"></i>
		<div class="input-container">
			<i class="icon icon-search"></i>
			<input type="text" placeholder="Buscar por nombre..." class="input-field" v-model="searchQuery">
		</div>
		<section class="filters">
			<div class="filter" :class="{ active: participantsQuery}">
				<label for="selector-participants"><i class="icon icon-people"></i></label>
				<select id="selector-participants" class="filter-selector"
				        v-model="participantsQuery" :class="{ active: participantsQuery}">
					<option selected :value="null">Participantes</option>
					<option v-for="participant in participants" :value="participant.identifier">{{ participant.text }}</option>
				</select>
			</div>
			<div class="filter" :class="{ active: durationsQuery}">
				<label for="selector-duration"><i class="icon icon-time"></i></label>
				<select id="selector-duration" class="filter-selector"
				        v-model="durationsQuery" :class="{ active: durationsQuery}">
					<option selected :value="null">Duración</option>
					<option v-for="duration in durations" :value="duration.identifier">{{ duration.text }}</option>
				</select>
			</div>
			<div class="filter" :class="{ active: categoriesQuery}">
				<label for="selector-category"><i class="icon icon-categories"></i></label>
				<select id="selector-category" class="filter-selector"
				        v-model="categoriesQuery" :class="{ active: categoriesQuery}">
					<option selected :value="null">Categoría</option>
					<option v-for="category in categories" :value="category.identifier">{{ category.text }}</option>
				</select>
			</div>
		</section>
	</aside>
</template>

<script>
	import typesParticipants from "@/constants/types-participants";
	import typesDurations from "@/constants/types-durations";
	import typesCategories from "@/constants/types-categories";

	export default {
		name: "SearchModal",
		data() {
			return {
				participants: typesParticipants,
				durations: typesDurations,
				categories: typesCategories
			}
		},
		computed: {
			searchQuery: {
				get () { return this.$store.state.app.searchQuery },
				set (value) { this.$store.commit('app/setSearchQuery', value) }
			},
			participantsQuery: {
				get () { return this.$store.state.app.participantsQuery },
				set (value) { this.$store.commit('app/setParticipantsQuery', value) }
			},
			durationsQuery: {
				get () { return this.$store.state.app.durationsQuery },
				set (value) { this.$store.commit('app/setDurationsQuery', value) }
			},
			categoriesQuery: {
				get () { return this.$store.state.app.categoriesQuery },
				set (value) { this.$store.commit('app/setCategoriesQuery', value) }
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
					border-bottom: 2px solid white;
					border-radius: 0;
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
				flex-wrap: nowrap;

				&:last-child {
					margin-right: -1px;
				}

				&.active {
					background-color: white;
					color: $primary-color;
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

					&.active {
						color: $primary-color;
					}

					&:focus {
						margin-bottom: -2px;
						border-bottom: 2px solid white;
					}
				}

				@media (max-width: 625px) {
					margin-right: 5px;
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
