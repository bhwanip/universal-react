import React from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router'

class UserForm extends React.Component {
    render() {
        return (
            <form action="/adduser" method="post" className="form-horizontal">
                <div className="form-group">
                    <div className={ this.props.showErrors && this.props.errors.firstName ? "has-error" : "" }>
                        <label htmlFor="firstName" className="col-sm-2 control-label">First Name*</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="firstName" name="firstName" maxLength="50" onChange={this.props.handleInputChange('firstName')} value={this.props.firstName} placeholder="First Name" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className={ this.props.showErrors && this.props.errors.lastName ? "has-error" : "" }>
                        <label htmlFor="lastName" className="col-sm-2 control-label">Last Name*</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="lastName" name="lastName" maxLength="50" onChange={this.props.handleInputChange('lastName')} value={this.props.lastName} placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <br />
                <button className="btn btn-primary" onClick={this.props.handleSubmit} type="submit" disabled={this.props.isFetching ? true : false}>{this.props.isFetching ? "Processing..." : "Save"}</button>
                &nbsp;&nbsp;
                <Link to="/" className="btn btn-default">Cancel</Link>
            </form>
        )
    }
}

UserForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showErrors: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default UserForm
