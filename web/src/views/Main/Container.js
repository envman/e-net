import React, { PropTypes as T } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
       {children}
      </div>
    )
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default Container;
