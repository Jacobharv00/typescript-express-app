import express from 'express'
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import './controllers/LoginControllers'
import './controllers/RootController'

import {AppRouter} from "./AppRouter";

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['asdfjkl']}))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('** Listening on port 3000 **')
})