import state from './activities.state'
import getters from './activities.getters'
import actions from './activities.actions'
import mutations from './activities.mutations'

export default {
	firestorePath: 'activities',
	firestoreRefType: 'collection', // or 'doc'
	moduleName: 'activities',
	statePropName: 'data',
	namespaced: true,

	state,
	getters,
	actions,
	mutations
};
