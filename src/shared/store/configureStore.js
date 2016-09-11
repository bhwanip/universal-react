import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

function configureStore(initialState) {
    let store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers'))
        })
    }

    return store
}

export default configureStore