import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './../../utils/AuthService'
import Container from './Container'
import Home from './Authenticated/Home/Home'
import Login from './Login/Login'
import Recruitment from './Authenticated/Recruitment/Recruitment'
import Applicant from './Applicant/Applicant'
import AuthenticatedContainer from './Authenticated/AuthenticatedContainer'
import Logout from './Authenticated/Logout/Logout'
import NewStarter from './NewStarter/NewStarter'

const auth = new AuthService('B7mtJpBucE6wlyo1KGxN2R5e0q6VvAS9', 'etech-dev.eu.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const parseAuthHash = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash)
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/auth/home" />
      <Route path="login" component={Login} onEnter={parseAuthHash} />
      <Route path="auth" component={AuthenticatedContainer} onEnter={requireAuth}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home} />
        <Route path="recruitment" component={Recruitment} />
        <Route path="applicant/:id" component={Applicant} />
        <Route path="logout" component={Logout} />
        <Route path="newstarter" component={NewStarter} />
      </Route>
    </Route>
  )
}

export default makeMainRoutes
