export default {
	sendActivity({state, commit}) {
		commit('activeNewActivity');
		this.dispatch("index/set", state.newActivity);
		commit('emptyNewActivity');
		commit('setCreating', false);
		commit('setConfirmation', true);
		setTimeout(() => commit('setConfirmation', false), 5000);
	},

	cancelActivity(state) {
		state.newActivity = {
			"active": false,
			"name": null,
			"participants": null,
			"duration": null,
			"category": null,
			"development": null,
			"creator": null,
			"likes": 0,
			"createdAt": new Date()
		};
		state.creating = false;
	}
}
