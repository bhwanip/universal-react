import actionConstants from '../actions/constants'

function user(state, action) {
    state = !state ? { firstName: '', lastName: '', hasErrors: true, showErrors: false, isFetching: false, errors: {}, users: [] } : state
    let newState = {}

    switch (action.type) {
        case actionConstants.UPDATE_USER:
            return validateUser(Object.assign({}, state, action.value))

        case actionConstants.REQUEST_SAVE_USER, actionConstants.REQUEST_USERS:
            return Object.assign({}, state, { isFetching: true })

        case actionConstants.RECEIVE_SAVE_USER:
            newState = Object.assign({}, state, {
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
            return Object.assign({}, state, { isFetching: false, users: action.value })

        default:
            return state
    }
}

function validateUser(user) {
    let errors = {}

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

export default user