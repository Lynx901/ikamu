export default {
	toggleCreation(state) {
		state.creating = !state.creating;
	},

	activeNewActivity(state) {
		state.newActivity.active = true;
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
