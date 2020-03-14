import state from './authentication.state'
import getters from './authentication.getters'
import actions from './authentication.actions'
import mutations from './authentication.mutations'

export default {
	firestorePath: 'users',
	firestoreRefType: 'doc', // or 'doc'
	moduleName: 'authentication',
	statePropName: 'data',
	namespaced: true,

	state,
	getters,
	actions,
	mutations
};

