import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import AuthService from './../../../utils/AuthService'
import styles from './styles.module.css'
import FileUpload from './../../../apiCalls/fileUpload'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }

    // console.log(props.auth.getToken())

    // not sure what this is for?
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({ profile: newProfile })
    })
  }

  logout() {
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render() {
    const { profile } = this.state
    return (
      <div className={styles.root}>
        <h2>Home</h2>
        <p>Welcome {profile.name}!</p>
        <FileUpload></FileUpload>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    )
  }
}

export default Home;
