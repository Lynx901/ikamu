<template>
	<main>
		<header class="activities-count">
			<h3 v-if="filteredActivities.length > 1">{{ filteredActivities.length }} actividades encontradas</h3>
			<h3 v-else-if="filteredActivities.length === 1">1 actividad encontrada</h3>
			<h3 class="red-text" v-else-if="filteredActivities.length < 1">No se han encontrado actividades para estos filtros. Intenta buscar con otros distintos o añade tú una actividad nueva que se ajuste a ellos</h3>
		</header>

		<section v-if="creating"  class="new-activity">
			<Activity-Block :activity="newActivity" creating="true">
			</Activity-Block>
			<form>
				<label class="email">
					<i class="icon icon-email"></i>
					<input class="email-input" placeholder="Escribe tu email..." v-model="newActivity.creatorEmail">
				</label>
				<button class="activity-send">Enviar</button>
				<button class="activity-cancel" @click="cancelActivity">Descartar la nueva actividad</button>
			</form>
		</section>

		<section class="activities">
			<Activity-Block v-for="activity in filteredActivities" :activity="activity">
			</Activity-Block>
		</section>
	</main>
</template>

<script>
	import {mapState, mapGetters, mapMutations} from 'vuex';
	import ActivityBlock from "../components/ActivityBlock";

	export default {
		name: "Home",
		components: { ActivityBlock },
		computed: {
			...mapState({
				newActivity: state => state.newActivity,
				creating: state => state.creating,
				activities: state => state.activities,
				searchQuery: state => state.searchQuery,
				participantsQuery: state => state.participantsQuery,
				durationsQuery: state => state.durationsQuery,
				categoriesQuery: state => state.categoriesQuery
			}),
			...mapGetters([
				'filteredActivities'
			])
		},
		methods: {
			...mapMutations([
				'cancelActivity'
			])
		}
	}
</script>

<style scoped lang="scss">
	@import '@/theme/variables.scss';

	.content {
		.activities-count {
			color: $primary-color;
			margin-bottom: 20px;

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

		.activities {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
