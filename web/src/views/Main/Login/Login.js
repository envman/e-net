import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'
import {Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap'
import AuthService from './../../../utils/AuthService'
import styles from './styles.module.css'
import { Jumbotron } from 'react-bootstrap'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  getAuthParams() {
    return {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }
  }

  login(e) {
    e.preventDefault()
    const { email, password } = this.getAuthParams()
    this.props.auth.login(email, password)
  }

  signup() {
    const { email, password } = this.getAuthParams()
    this.props.auth.signup(email, password)
  }

  loginWithGoogle() {
    this.props.auth.loginWithGoogle();
  }

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="please login" />
          </h2>
          <div className={styles.root}>
            <h2>Login</h2>
            <Form onSubmit={this.login.bind(this)}>
              <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" ref="email" placeholder="yours@example.com" required />
              </FormGroup>

              <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" ref="password" placeholder="Password" required />
              </FormGroup>

              <ButtonToolbar>
                <Button type="submit" bsStyle="primary">Log In</Button>
                <Button onClick={this.signup.bind(this)}>Sign Up</Button>
                <Button bsStyle="link" onClick={this.loginWithGoogle.bind(this)}>Login with Google</Button>
              </ButtonToolbar>
            </Form>
          </div>
        </Jumbotron>
      </div>
    )
  }
}

export default Login;
