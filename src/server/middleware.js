import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import routes from '../shared/routes'

export default function(store) {
    return function middleware(req, res, next) {
        var state = (req.method !== 'GET' ? {method: req.method, body: req.body} : null)
        route({pathname: req.url, query: req.query, state: state}, res, next)
    }

    function route(location, res, next) {
        match({ routes: routes(store), location }, (error, redirectLocation, renderProps) => {
            if (error) {
                console.log('Error', error)
                res.status(500).send(error)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                let content = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        { <RouterContext {...renderProps} /> }
                    </Provider>
                )
                res.render('index', { content: content })
            } else {
                res.status(404).send('Not Found')
            }
        })
    }
}