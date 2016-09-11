import superagent from 'superagent'
import actionConstants from './constants'
const BASE_URL = typeof window == 'undefined' ? `http://localhost:${process.env.PORT || 3000}` : ''

function updateUser(updates) {
    return { type: actionConstants.UPDATE_USER, value: updates }
}

function addUser(user) {
    return { type: actionConstants.RECEIVE_SAVE_USER, value: user }
}

function requestSaveUser(user) {
    return { type: actionConstants.REQUEST_SAVE_USER, value: user }
}

function receiveSaveUser(json) {
    return { type: actionConstants.RECEIVE_SAVE_USER, value: json }
}

function requestUsers() {
    return { type: actionConstants.REQUEST_USERS }
}

function receiveUsers(json) {
    return { type: actionConstants.RECEIVE_USERS, value: json }
}

function saveUser(user) {
    return dispatch => {
        dispatch(requestSaveUser(user))
        superagent.post(`${BASE_URL}/api/users`).send(user).set('Accept', 'application/json').end((err, res) => {
            dispatch(receiveSaveUser(res.body))
        })
    }
}

function fetchUsers() {
    return dispatch => {
        dispatch(requestUsers())
        superagent.get(`${BASE_URL}/api/users`).set('Accept', 'application/json').end((err, res) => {
            dispatch(receiveUsers(res.body))
        })
    }
}

export default {
    updateUser,
    saveUser,
    addUser,
    fetchUsers
}