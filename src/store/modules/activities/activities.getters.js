export default {
	filteredActivities (state, getters, rootState) {
		let act = Object.values(state.data).sort((a, b) => {
			return new Date(b.createdAt.seconds * 1000) - new Date(a.createdAt.seconds * 1000);
		});

		if (act.length > 0) {
			let returnActivities = act;

			returnActivities = returnActivities.filter(activity => {
				return activity.active;
			});

			if (rootState.app.participantsQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.participants.identifier === rootState.app.participantsQuery;
				})
			}

			if (rootState.app.durationsQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.duration.identifier === rootState.app.durationsQuery;
				})
			}

			if (rootState.app.categoriesQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.category.identifier === rootState.app.categoriesQuery;
				})
			}

			if (rootState.app.searchQuery) {
				returnActivities = returnActivities.filter(activity => {
					let searchRegex = new RegExp(rootState.app.searchQuery, 'i');
					return searchRegex.test(activity.name);
				})
			}

			return returnActivities;
		} else {
			return [];
		}
	}
}
