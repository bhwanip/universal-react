import React from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import constants from '../actions/constants'
import userActions from '../actions/user'
import User from '../components/User'

class Users extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.fetchUsers())
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to="/AddUser">Add User</Link>
                <h2>Users</h2>
                <hr />
                <ul>
                    {this.props.user.users.map((user, i) =>
                        <User key={i} firstName={user.firstName} lastName={user.lastName} />
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Users)