import React from 'react'
import { PropTypes } from 'react'

class Users extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map((user, i) =>
                    <li key={i}>{user.firstName + ' ' + user.lastName}</li>
                )}
            </ul>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
