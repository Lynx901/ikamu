export default {
	deleteFilters({state, commit}) {
		commit('setSearchQuery', null);
		commit('setParticipantsQuery', null);
		commit('setDurationsQuery', null);
		commit('setCategoriesQuery', null);
	},
}
