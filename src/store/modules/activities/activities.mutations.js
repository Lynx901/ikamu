export default {
	setSearchQuery(state, query) {
		state.searchQuery = query;
	},

	setParticipantsQuery(state, query) {
		state.participantsQuery = query;
	},

	setDurationsQuery(state, query) {
		state.durationsQuery = query;
	},

	setCategoriesQuery(state, query) {
		state.categoriesQuery = query;
	},

	setCreating(state, value) {
		state.creating = value;
	},

	setConfirmation(state, value) {
		state.confirmation = value;
	},

	emptyNewActivity(state) {
		state.newActivity = {
			"id": null,
			"active": false,
			"name": null,
			"participants": {"identifier": null, "text": null},
			"duration": {"identifier": null, "text": null},
			"category": {"identifier": null, "text": null},
			"development": null,
			"creator": null,
			"creatorEmail": null,
			"likes": 0,
			"createdAt": new Date()
		};
	}
}
