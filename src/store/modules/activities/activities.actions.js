
export default {
	fetchActivities({dispatch}) {
		return new Promise((resolve, reject) => {
			dispatch('fetchAndAdd')
				.then(() => resolve());
		})
	},

	sendActivity({state, commit, dispatch}) {
		commit('activeNewActivity');
		dispatch("set", state.newActivity);
		dispatch("users/{userId}/set", state.newActivity, {root: true});
		commit('emptyNewActivity');
		commit('setCreating', false);
		commit('setConfirmation', true);
		setTimeout(() => commit('setConfirmation', false), 10000);
	},

	cancelActivity({commit}) {
		commit('emptyNewActivity');
		commit('setCreating', false);
	}
}
