import userActions from '../shared/actions/user'

export default function(store) {
    return function apimiddleware(req, res, next) {
        if(req.url.toLowerCase() === '/api/users') {
            handleUserAction(req, res)
        }
        else {
            next()
        }
    }

    function handleUserAction(req, res) {
        if(req.method === 'POST') {
            store.dispatch(userActions.addUser(req.body))
            res.send(req.body)
        }
        else if(req.method === 'GET') {
            res.send(store.getState().user.users)
        }
    }
}