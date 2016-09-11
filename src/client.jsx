import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routesConfig from './shared/routes/config'
import configureStore from './shared/store/configureStore'

let store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routesConfig(store)}
        </Router>
    </Provider>,
    document.getElementById('app'))