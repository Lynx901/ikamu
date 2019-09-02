export default {
	isUserLoggedIn: state => ((state.user !== null) && (state.user !== undefined))
}
