import actionConstants from '../actions/constants'

var validateUser = function (user) {
    var errors = {}

    if (!user.firstName) {
        errors.firstName = 'Enter a First Name'
    }

    if (!user.lastName) {
        errors.lastName = 'Enter a Last Name'
    }

    user.hasErrors = Object.keys(errors).length
    user.errors = errors
    return user
}

function user(state, action) {
    state = !state ? { firstName: '', lastName: '', hasErrors: true, showErrors: false, isFetching: false, errors: {}, users: [] } : state

    switch (action.type) {
        case actionConstants.UPDATE_USER:
            var user = Object.assign({}, state, action.value)
            return validateUser(user)

        case actionConstants.REQUEST_SAVE_USER, actionConstants.REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true
            })

        case actionConstants.RECEIVE_SAVE_USER:
            var newState = Object.assign({}, state, {
                isFetching: false,
                showErrors: false,
                hasErrors: true,
                firstName: '',
                lastName: '',
                errors: {}
            })
            newState.users.push({firstName: action.value.firstName, lastName: action.value.lastName})
            return newState

        case actionConstants.RECEIVE_USERS:
            var newState = Object.assign({}, state, {
                isFetching: false,
                users: action.value
            })
            return newState

        default:
            return state
    }
}

export default user