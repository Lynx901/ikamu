import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		creating: false,
		searching: (window.innerWidth > 1130),
		searchQuery: null,
		participantsQuery: null,
		durationsQuery: null,
		categoriesQuery: null,
		newActivity: {
			"active": false,
			"name": null,
			"participants": null,
			"duration": null,
			"category": null,
			"development": null,
			"creator": null,
			"likes": 0,
			"createdAt": new Date()
		},
		activities: [
			{"active": true, "name": "Actividad 1 asdfasdfasdasdfasdfasfasfasdfasfasdfasfsa fasdfasdfasdf sadf asdf ", "participants": 5, "duration": 30, "category": "conocimiento", "development": "Why are you fucking reading all of this? Get back to work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Never let your guard down by thinking you’re fucking good enough. Design as if your fucking life depended on it. Don’t fucking lie to yourself. ", "creator": "Daniel Moya Leiva", "likes": 2, "createdAt": "2019/08/18"},
			{"active": true, "name": "Actividad 2 asdfasdfasd fasdfasdfasdf sadf asdf ", "participants": 5, "duration": 60, "category": "pequeñas", "development": "Why are you fucking reading all of this? Get back to work. What’s important is the fucking drive to see a project through no matter what. Don’t fucking lie to yourself. Remember it’s called the creative process, it’s not the creative fucking moment. Fuck. Intuition is fucking important. Someday is not a fucking day of the week. Nothing of value comes to you without fucking working at it. This design is fucking brilliant. Practice won’t get you anywhere if you mindlessly fucking practice the same thing. Change only occurs when you work deliberately with purpose toward a goal. When you sit down to work, external critics aren’t the enemy. It’s you who you must to fight against to do great fucking work. You must overcome yourself. You are not your fucking work. Use your fucking hands. Learn from fucking criticism. Paul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.” If you fucking give up, you will achieve nothing. A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Respect your fucking craft. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Think about all the fucking possibilities. Make your work consistent but not fucking predictable. Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. The details are not the details. They make the fucking design. To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? Dedicate yourself to lifelong fucking learning. Form follows fucking function. Sometimes it is appropriate to place various typographic elements on the outside of the fucking left margin of text to maintain a strong vertical axis. ", "creator": "Daniel Moya Leiva", "likes": 102, "createdAt": "2019/07/31"},
			{"active": true, "name": "Actividad 3 asdfasdfasd fasdfasdfasdf sadf asdf ", "participants": 10, "duration": 30, "category": "pensar", "development": "Why are you fucking reading all of this? Get back to work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Never let your guard down by thinking you’re fucking good enough. Design as if your fucking life depended on it. Don’t fucking lie to yourself. ", "creator": "Daniel Moya Leiva", "likes": 0, "createdAt": "2019/07/01"},
			{"active": true, "name": "Actividad 4 asdfasdfasd fasdfasdfasdf sadf asdf ", "participants": 5, "duration": 120, "category": "entretenidas", "development": "Why are you fucking reading all of this? Get back to work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Never let your guard down by thinking you’re fucking good enough. Design as if your fucking life depended on it. Don’t fucking lie to yourself. ", "creator": "Daniel Moya Leiva", "likes": 2, "createdAt": "2019/08/15"},
			{"active": true, "name": "Actividad 5", "participants": 10, "duration": -1, "category": "confianza", "development": "Why are you fucking reading all of this? Get back to work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Never let your guard down by thinking you’re fucking good enough. Design as if your fucking life depended on it. Don’t fucking lie to yourself. ", "creator": "Daniel Moya Leiva", "likes": 5, "createdAt": "2018/12/01"},
			{"active": true, "name": "Actividad 6", "participants": -1, "duration": 60, "category": "equipo", "development": "Why are you fucking reading all of this? Get back to work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Never let your guard down by thinking you’re fucking good enough. Design as if your fucking life depended on it. Don’t fucking lie to yourself. ", "creator": "Daniel Moya Leiva", "likes": 20, "createdAt": "2019/01/01"},
			{"active": true, "name": "Actividad 7", "participants": -1, "duration": 60, "category": "reflexion", "development": "Why are you fucking reading all of this? Get back to work. What’s important is the fucking drive to see a project through no matter what. Don’t fucking lie to yourself. Remember it’s called the creative process, it’s not the creative fucking moment. Fuck. Intuition is fucking important. Someday is not a fucking day of the week. Nothing of value comes to you without fucking working at it. This design is fucking brilliant. Practice won’t get you anywhere if you mindlessly fucking practice the same thing. Change only occurs when you work deliberately with purpose toward a goal. When you sit down to work, external critics aren’t the enemy. It’s you who you must to fight against to do great fucking work. You must overcome yourself. You are not your fucking work. Use your fucking hands. Learn from fucking criticism. Paul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.” If you fucking give up, you will achieve nothing. A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Respect your fucking craft. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Think about all the fucking possibilities. Make your work consistent but not fucking predictable. Widows and orphans are terrible fucking tragedies, both in real life and definitely in typography. The details are not the details. They make the fucking design. To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. When you design, you have to draw on your own fucking life experiences. If it’s not something you would want to read/look at/use then why fucking bother? Dedicate yourself to lifelong fucking learning. Form follows fucking function. Sometimes it is appropriate to place various typographic elements on the outside of the fucking left margin of text to maintain a strong vertical axis. ", "creator": "Daniel Moya Leiva", "likes": 12, "createdAt": "2017/05/01"}
		]
	},
	getters: {
		filteredActivities: state => {
			if(state.activities.length > 0) {
				let returnActivities = state.activities;

				returnActivities = returnActivities.filter(activity => {
					return activity.active;
				});

				if (state.participantsQuery) {
					returnActivities = returnActivities.filter(activity => {
						return activity.participants === state.participantsQuery;
					})
				}

				if (state.durationsQuery) {
					returnActivities = returnActivities.filter(activity => {
						return activity.duration === state.durationsQuery;
					})
				}

				if (state.categoriesQuery) {
					returnActivities = returnActivities.filter(activity => {
						return activity.category === state.categoriesQuery;
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
		}
	}
})
