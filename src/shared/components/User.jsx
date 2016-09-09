import React from 'react'
import { PropTypes } from 'react'

class User extends React.Component {
    render() {
        return (
            <li>{this.props.firstName + ' ' + this.props.lastName}</li>
        )
    }
}

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default User
