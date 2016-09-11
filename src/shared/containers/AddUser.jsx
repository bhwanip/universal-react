import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import constants from '../actions/constants'
import userActions from '../actions/user'
import ErrorSummary from '../components/ErrorSummary'
import UserForm from '../components/UserForm'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this._handleSubmit = this._handleSubmit.bind(this)
        this._handleInputChange = this._handleInputChange.bind(this)
    }

    render() {
        return (
            <div>
                <h2>Add User</h2>
                <hr />
                <ErrorSummary errors={this.props.user.errors} shouldShow={this.props.user.showErrors} />
                <UserForm firstName={this.props.user.firstName} lastName={this.props.user.lastName} isFetching={this.props.user.isFetching} showErrors={this.props.user.showErrors} errors={this.props.user.errors} handleSubmit={this._handleSubmit} handleInputChange={this._handleInputChange} />
            </div>
        )
    }

    _handleSubmit(e) {
        e.preventDefault()
        this.props.dispatch(userActions.updateUser({ "showErrors": true }))

        if (!this.props.user.hasErrors) {
            this.props.dispatch(userActions.saveUser(this.props.user))
            browserHistory.push('/')
        }
    }

    _handleInputChange(inputName) {
        return (event) => {
            let updates = {}
            updates[inputName] = event.target.value
            this.props.dispatch(userActions.updateUser(updates))
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddUser)