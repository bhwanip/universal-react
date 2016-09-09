import express from "express"
import bodyParser from 'body-parser'
import middleware from './server/middleware'
import apimiddleware from './server/apimiddleware'
import configureStore from './shared/store/configureStore'

let store = configureStore()
const app = express()

app.set('views', './views')
app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(apimiddleware(store))
app.use(middleware(store))

var server = app.listen(3000)