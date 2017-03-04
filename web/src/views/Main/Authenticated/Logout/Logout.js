import React, { PropTypes as T } from 'react'
import { browserHistory } from 'react-router'
import AuthService from '../../../../utils/AuthService'

export class Logout extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  componentWillMount() {
    this.props.auth.logout()
    browserHistory.replace('/login')
  }
}

export default Logout;
