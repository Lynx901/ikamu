import router from '@/router'
import firebase from "firebase";

export default {
	login: ({commit}) => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then((result) => {
			commit('setUser', result);
			router.replace('');
		}).catch((err) => {
			alert('Oops. ' + err.message);
		});
	},

	logout: ({commit}) => {
		firebase.auth().signOut().then(() => {
			commit('setUser', null);
			router.replace('')
		})
	}
}
