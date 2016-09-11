import React from 'react'
import { PropTypes } from 'react'
import Errors from './Errors'

class ErrorSummary extends React.Component {
    render () {
        if (!this.props.shouldShow || !Object.keys(this.props.errors).length) return null

        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    <h4>Please correct the following:</h4>
                    <Errors errors={this.props.errors} />
                </div>
            </div>
        )
    }
}

ErrorSummary.propTypes = {
    errors: PropTypes.object.isRequired,
    shouldShow: PropTypes.bool.isRequired
}

export default ErrorSummary