import React, { PropTypes } from 'react'
import { Router } from 'react-router'


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

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render() {
     return (
       <div className="container-fluid">
          {this.content}
       </div>
     )
   }
}

export default App;
