import firebase from 'firebase/app'

import {dispatch} from '@/store'

firebase.auth().onAuthStateChanged(user => {
	const action = (user === null || user === undefined) ? 'logout' : 'login';
	dispatch('authentication/' + action, user)
})
