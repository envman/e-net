import React, { PropTypes as T } from 'react'
import AuthService from '../../../../utils/AuthService'
import styles from './styles.module.css'
import FileUpload from '../../../../apiCalls/fileUpload'

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
      </div>
    )
  }
}

export default Home;
