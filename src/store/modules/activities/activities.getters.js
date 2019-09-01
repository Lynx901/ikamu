export default {
	filteredActivities: (state) => {
		let act = Object.values(state.activities.data).sort((a, b) => {
			return new Date(b.createdAt.seconds * 1000) - new Date(a.createdAt.seconds * 1000);
		});

		if(act.length > 0) {
			let returnActivities = act;

			returnActivities = returnActivities.filter(activity => {
				return activity.active;
			});

			if (state.participantsQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.participants.identifier === state.participantsQuery;
				})
			}

			if (state.durationsQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.duration.identifier === state.durationsQuery;
				})
			}

			if (state.categoriesQuery) {
				returnActivities = returnActivities.filter(activity => {
					return activity.category.identifier === state.categoriesQuery;
				})
			}

			if (state.searchQuery) {
				returnActivities = returnActivities.filter(activity => {
					let searchRegex = new RegExp(state.searchQuery, 'i');
					return searchRegex.test(activity.name);
				})
			}

			return returnActivities;
		} else {
			return [];
		}
	}
}
