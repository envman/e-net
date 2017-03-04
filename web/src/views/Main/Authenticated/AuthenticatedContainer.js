import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import './styles.css'

export class AuthenticatedContainer extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    let children = null;
    if (this.props.children) {
        children = React.cloneElement(this.props.children, {
        auth: this.props.auth //sends auth instance to children
      })
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3">
            <Drawer open={true}>
              <Link to="/auth/home"><MenuItem>Home</MenuItem></Link>
              <Link to="/auth/recruitment"><MenuItem>Recruitment</MenuItem></Link>
            </Drawer>
          </div>
          <div className="col-xs-9">
            {children}
          </div>
        </div>
      </div>
    )
  }
}


AuthenticatedContainer.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default AuthenticatedContainer;
