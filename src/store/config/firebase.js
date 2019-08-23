import * as Firebase from 'firebase/app'
import 'firebase/firestore'

function initFirebase () {
	Firebase.initializeApp({
		apiKey: "AIzaSyCrA0NIeJo5spp83qEdZuJbPx8eXHPv1nA",
		authDomain: "ikamu-d0f46.firebaseapp.com",
		databaseURL: "https://ikamu-d0f46.firebaseio.com",
		projectId: "ikamu-d0f46",
		storageBucket: "ikamu-d0f46.appspot.com",
		messagingSenderId: "770182188508",
		appId: "1:770182188508:web:bcc261282e5d4e21"
	});
	return new Promise((resolve, reject) => {
		Firebase.firestore().enablePersistence()
			.then(resolve)
			.catch(err => {
				if (err.code === 'failed-precondition') {
					reject(err)
					// Multiple tabs open, persistence can only be
					// enabled in one tab at a a time.
				} else if (err.code === 'unimplemented') {
					reject(err)
					// The current browser does not support all of
					// the features required to enable persistence
				}
			})
	})

}

export { Firebase, initFirebase }
