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
		</section>

		<section class="activities">
			<Activity-Block v-for="activity in filteredActivities" :activity="activity">
			</Activity-Block>
		</section>
	</main>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
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
		}

		.activities {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
