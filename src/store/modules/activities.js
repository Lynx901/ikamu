const activities = {
	firestorePath: 'activities',
	firestoreRefType: 'collection', // or 'doc'
	moduleName: 'activities',
	statePropName: 'data',
	namespaced: true, // automatically added

	// this object is your store module (will be added as '/activities')
	// you can also add state/getters/mutations/actions
	state: {},
	getters: {},
	mutations: {},
	actions: {},
};

export default activities
