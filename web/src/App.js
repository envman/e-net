import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
     return (
       <div className="container-fluid">
         <div className="row">
           <div className="col-xs-3">
             <Drawer open={true}>
               <MenuItem>Item</MenuItem>
             </Drawer>
           </div>
           <div className="col-xs-9">
             {this.content}
           </div>
         </div>
       </div>
     )
   }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default App;
