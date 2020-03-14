import router from '@/router'
import firebase from "firebase";

export default {
	login: async ({commit, dispatch}, firebaseAuthUser) => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(provider)
			.then((result) => {

				if (result.additionalUserInfo.isNewUser) {
					dispatch('set', result, result.user.uid);
				}

				commit('setUser', result);
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
