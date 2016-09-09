import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppHandler from './components/AppHandler'
import Users from './containers/Users'
import AddUser from './containers/AddUser'

export default (store) => {
    return (
        <Route component={AppHandler} path="/">
            <IndexRoute component={Users}/>
            <Route component={AddUser} path="AddUser" onEnter={AddUser.onEnter(store)}/>
        </Route>
    )
}