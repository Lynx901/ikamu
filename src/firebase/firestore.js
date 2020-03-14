import firebase from 'firebase/app'

let firestore = null;

export default () => {
	if ((firestore === null || firestore === undefined)) {
		asyncFirestore = import('firebase/firestore').then(
			() => {
				firebase.firestore().settings({});
				firebase.firestore().enablePersistence({ synchronizeTabs: true });
				return firebase.firestore()
			}
		)
	}
	return firestore
}
