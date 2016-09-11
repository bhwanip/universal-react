import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppHandler from '../components/AppHandler'
import UserList from '../containers/UserList'
import AddUser from '../containers/AddUser'
import routeEnterHandler from './routeEnterHandler'

export default (store) => {
    return (
        <Route component={AppHandler} path="/">
            <IndexRoute component={UserList}/>
            <Route component={AddUser} path="AddUser" onEnter={routeEnterHandler.onAddUserEnter(store)}/>
        </Route>
    )
}