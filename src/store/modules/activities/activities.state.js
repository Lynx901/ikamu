export default {
	activities: [],
	creating: false,
	showConfirmation: false,
	searchQuery: null,
	participantsQuery: null,
	durationsQuery: null,
	categoriesQuery: null,
	newActivity: {
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
	}
}
