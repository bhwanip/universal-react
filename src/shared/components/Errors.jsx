import React from 'react'
import { PropTypes } from 'react'

class Errors extends React.Component {
    render() {
        return (
            <ul>
                {Object.keys(this.props.errors).map(errorKey =>
                    <li key={errorKey}>{this.props.errors[errorKey]}</li>
                )}
            </ul>
        )
    }
}

Errors.propTypes = {
    errors: PropTypes.object.isRequired
}

export default Errors
