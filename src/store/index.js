import Vuex from 'vuex'
import Vue from 'vue'
import activities from './modules/activities'
import app from './modules/app'
import authentication from './modules/authentication'

import VuexEasyFirestore from 'vuex-easy-firestore';
import { Firebase, initFirebase } from './config/firebase.js'

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
	[activities],
	{logging: true, FirebaseDependency: Firebase} //TODO: DISABLE THIS ON PRODUCTION
);

const storeData = {
	plugins: [easyFirestore],

	//Firebase modules should only be passed in the easyFirestore const, not here
	modules: {
		authentication,
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

export default store;
