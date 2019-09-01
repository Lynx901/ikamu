<template>
	<main>
		<header class="activities-count">
			<h3 v-if="activities.length > 1">{{ activities.length }} actividades encontradas</h3>
			<h3 v-else-if="activities.length === 1">1 actividad encontrada</h3>
			<h3 class="red-text" v-else-if="activities.length < 1">No se han encontrado actividades para estos filtros. Intenta buscar con otros distintos o añade tú una actividad nueva que se ajuste a ellos</h3>
			<span v-if="activeFilter" @click="deleteFilters" class="filter-delete"><i class="icon icon-close-cross"></i>Borrar todos los filtros</span>
		</header>

		<section v-if="creating" class="new-activity">
			<Activity-Block :activity="newActivity" creating="true">
			</Activity-Block>
			<form @submit.prevent="sendActivity">
				<label class="email">
					<i class="icon icon-email"></i>
					<input class="email-input" placeholder="Escribe tu email..." v-model="newActivity.creatorEmail">
				</label>
				<button type="submit" class="activity-send">Enviar</button>
				<button class="activity-cancel" @click="cancelActivity">Descartar la nueva actividad</button>
			</form>
		</section>
		<section v-if="showConfirmation" class="confirmation-message">
			<h3>¡La actividad se ha enviado correctamente!</h3>
		</section>

		<section class="activities">
			<Activity-Block v-for="activity in activities" :activity="activity">
			</Activity-Block>
		</section>
	</main>
</template>

<script>
	import {mapState, mapGetters} from 'vuex';
	import ActivityBlock from "../components/ActivityBlock";

	export default {
		name: "Home",
		components: { ActivityBlock },
		computed: {
			...mapState({
				newActivity: state => state.activities.newActivity,
				showConfirmation: state => state.activities.showConfirmation,
				creating: state => state.activities.creating,
				searchQuery: state => state.activities.searchQuery,
				participantsQuery: state => state.activities.participantsQuery,
				durationsQuery: state => state.activities.durationsQuery,
				categoriesQuery: state => state.activities.categoriesQuery
			}),

			...mapGetters('activities', {
				activities: 'filteredActivities'
			}),

			activeFilter() {
				return this.searchQuery !== null
					|| this.participantsQuery !== null
					|| this.durationsQuery !== null
					|| this.categoriesQuery !== null
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	@import '@/theme/variables.scss';

	.content {
		.activities-count {
			color: $primary-color;
			margin-bottom: 20px;
			display: flex;
			align-items: center;

			.filter-delete {
				margin-left: 20px;

				background-color: $primary-color;
				color: white;

				padding: 5px 10px;

				border-radius: 5px;

				cursor: pointer;

				.icon {
					margin-right: 10px;

					position: relative;
					top: 2px;
				}
			}

			.red-text {
				color: $danger-color;
			}
		}

		.new-activity {
			display: flex;
			justify-content: center;
			align-items: center;

			.activity {
				margin-right: 50px;

				@media (max-width: 880px) {
					margin-right: 0;
					margin-bottom: 35px;
				}
			}

			form {
				display: flex;
				flex-direction: column;
				justify-content: center;

				.email {
					font-size: 40px;
					color: $primary-color;

					display: flex;
					align-items: center;

					margin-bottom: 20px;

					.icon {
						position: relative;
						top: 5px;
						margin-right: 20px;
					}

					.email-input {
						width: 350px;

						border: none;
						border-bottom: 2px solid gray;
						border-radius: 0;

						font-size: 28px;
						color: $primary-color;

						&:focus {
							outline: none;
							border-bottom: 2px solid $primary-color;
						}

						@media (max-width: 880px) {
							width: 100%;
						}
					}
				}

				.activity-send {
					margin-bottom: 40px;

					border: none;
					font-size: 16px;

					background: #FFFFFF;
					box-shadow: 0 2px 7px 1px rgba(0,0,0,0.50);
					border-radius: 5px;

					padding: 10px 0;

					&:hover {
						color: white;
						cursor: pointer;
						background-color: rgba(26, 41, 128, 0.8);
					}

					&:focus {
						outline: none;
					}

					@media (max-width: 880px) {
						padding: 20px 0;
						margin-bottom: 20px;
					}
				}

				.activity-cancel {
					color: $danger-color;
					border: none;
					font-size: 16px;
					border-radius: 5px;

					padding: 10px 0;

					&:hover {
						cursor: pointer;
						background-color: rgba(234, 77, 70, 0.2);
					}

					&:focus {
						outline: none;
					}

					@media (max-width: 880px) {
						padding: 20px 0;
						margin-bottom: 100px;
					}
				}
			}

			@media (max-width: 880px) {
				flex-direction: column;
			}
		}

		.confirmation-message {
			background-color: $vue-color;
			color: white;
			padding: 20px;
			text-align: center;
			border-radius: 5px;
			margin-bottom: 20px;
		}

		.activities {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
