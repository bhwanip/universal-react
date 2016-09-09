import { combineReducers } from 'redux'
import user from './user'

const isomorphicApp = combineReducers({
    user
});

export default isomorphicApp