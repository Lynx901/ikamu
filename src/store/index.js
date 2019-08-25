import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';

Vue.use(Vuex);

import { Firebase, initFirebase } from './config/firebase.js'
import activities from './modules/activities.js'

const easyFirestore = VuexEasyFirestore(
	[activities],
	{logging: true, FirebaseDependency: Firebase} //TODO: DISABLE THIS ON PRODUCTION
);

// include as PLUGIN in your vuex store
// please note that "myModule" should ONLY be passed via the plugin
const storeData = {
	plugins: [easyFirestore],
	state: {
		showConfirmation: false,
		creating: false,
		searching: (window.innerWidth > 1130),
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
	},
	getters: {
		activeFilter: state => {
			return (state.participantsQuery || state.durationsQuery || state.categoriesQuery);
		},
		filteredActivities: state => {
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
	},
	mutations: {
		toggleCreation(state) {
			state.creating = !state.creating;
		},
		toggleSearch(state) {
			state.searching = !state.searching;
		},
		updateSearchQuery(state, query) {
			state.searchQuery = query;
		},
		updateParticipantsQuery(state, query) {
			state.participantsQuery = query;
		},
		updateDurationsQuery(state, query) {
			state.durationsQuery = query;
		},
		updateCategoriesQuery(state, query) {
			state.categoriesQuery = query;
		},
		deleteFilters(state) {
			state.searchQuery = null;
			state.participantsQuery = null;
			state.durationsQuery = null;
			state.categoriesQuery = null;
		},
		sendActivity(state) {
			state.newActivity.active = true;
			this.dispatch("activities/set", state.newActivity);
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
			state.showConfirmation = true;
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
};

// initialise Vuex
const store = new Vuex.Store(storeData);

// initFirebase
initFirebase()
	.catch(error => {
		// take user to a page stating an error occurred
		// (might be a connection error, or the app is open in another tab)
	});

store.dispatch('activities/openDBChannel')
	.then()
	.catch(console.error);

export default store;
