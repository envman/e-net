import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import { browserHistory } from 'react-router'
import auth0 from 'auth0-js'
import decode from 'jwt-decode'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    // Configure Auth0
    this.auth0 = new auth0.WebAuth({
      clientID: clientId,
      domain: domain,
      responseType: 'token id_token'
      // redirectUri: `${window.location.origin}/login`
    })

    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.loginWithGoogle = this.loginWithGoogle.bind(this)
  }

  login(username, password) {
    this.auth0.client.login({
      realm: 'etechid',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description)
        return
      }

      if (authResult && authResult.idToken && authResult.accessToken) {
        console.log(authResult.idToken)
        this.setToken(authResult.accessToken, authResult.idToken)
        browserHistory.replace('/auth/home')
      }
    })
  }

  signup(email, password) {
    this.auth0.redirect.signupAndLogin({
      connection: 'etechid',
      email,
      password,
    }, function(err) {
      if (err) {
        console.log(err)
        alert('Error: ' + err.description)
      }
    })
  }

  loginWithGoogle() {
    this.auth0.authorize({
      connection: 'google-oauth2',
    })
  }

  parseHash(hash) {
    console.log('parse hash')

    this.auth0.parseHash({ hash }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken)
        browserHistory.replace('/home')
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            console.log('Error loading the Profile', error)
          } else {
            this.setProfile(profile)
            console.log('profile', profile)
          }
        })
      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error)
      }
    })
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(accessToken, idToken) {
    // Saves user access token and ID token into local storage
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('id_token', idToken)
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  email() {
    const token = this.getToken()
    return decode(token).email
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')

    console.log('Logged out')
  }
}
