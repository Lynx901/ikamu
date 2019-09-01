import Vuex from 'vuex'
import Vue from 'vue'
import activities from './modules/activities'
import app from './modules/app'

import VuexEasyFirestore from 'vuex-easy-firestore';
import { Firebase, initFirebase } from './config/firebase.js'

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
	[activities],
	{logging: true, FirebaseDependency: Firebase} //TODO: DISABLE THIS ON PRODUCTION
);

const storeData = {
	plugins: [easyFirestore],

	modules: {
		activities,
		app
	},

	state: {},

	getters: {},

	actions: {},

	mutations: {}
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
