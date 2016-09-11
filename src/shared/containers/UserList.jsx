import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import constants from '../actions/constants'
import userActions from '../actions/user'
import Users from '../components/Users'

class UserList extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.fetchUsers())
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to="/AddUser">Add User</Link>
                <h2>Users</h2>
                <hr />
                <Users users={this.props.user.users} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserList)