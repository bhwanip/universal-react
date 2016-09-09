import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import constants from '../actions/constants'
import userActions from '../actions/user'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this._handleSubmit = this._handleSubmit.bind(this)
        this._handleInputChange = this._handleInputChange.bind(this)
    }

    static onEnter(store) {
        return (nextState, replace, cb) => {
            var req = nextState.location.state
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

    render() {
        return (
            <div>
                <h2>Add User</h2>
                <hr />
                <form action="/adduser" method="post" className="form-horizontal">
                    <div className="form-group">
                        <div className={ this.props.user.showErrors && this.props.user.errors.firstName ? "has-error" : "" }>
                            <label htmlFor="firstName" className="col-sm-2 control-label">First Name*</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="firstName" name="firstName" maxLength="50" onChange={this._handleInputChange('firstName', userActions.updateUser)} value={this.props.user.firstName} placeholder="First Name" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className={ this.props.user.showErrors && this.props.user.errors.lastName ? "has-error" : "" }>
                            <label htmlFor="lastName" className="col-sm-2 control-label">Last Name*</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="lastName" name="lastName" maxLength="50" onChange={this._handleInputChange('lastName', userActions.updateUser)} value={this.props.user.lastName} placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={this._handleSubmit} type="submit" disabled={this.props.user.isFetching ? true : false}>{this.props.user.isFetching ? "Processing..." : "Save"}</button>
                    &nbsp;&nbsp;
                    <Link to="/" className="btn btn-default">Cancel</Link>
                </form>
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

    _handleInputChange(inputName, action) {
        return (event) => {
            var updates = {}
            updates[inputName] = event.target.value
            this.props.dispatch(action(updates))
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddUser)