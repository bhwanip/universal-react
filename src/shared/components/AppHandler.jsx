import React from "react"
import { Link } from 'react-router'

export default class AppHandler extends React.Component {  
    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Isomorphic App</Link>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Users</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}