import userActions from '../actions/user'

function onAddUserEnter(store) {
    return (nextState, replace, cb) => {
        let req = nextState.location.state
        if (!req || req.method !== 'POST') { return cb() }

        req.body.showErrors = true
        store.dispatch(userActions.updateUser(req.body))

        if(!store.getState().user.hasErrors) {
            store.dispatch(userActions.addUser(req.body))
            replace({pathname: '/'})
        }
        cb()
    }
}

export default {
    onAddUserEnter
}