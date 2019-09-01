export default {
	deleteFilters(state) {
		state.searchQuery = null;
		state.participantsQuery = null;
		state.durationsQuery = null;
		state.categoriesQuery = null;
	},
}
