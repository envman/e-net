import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'

export class Recruitment extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { response: { name: '', favColour: '' } }
  }

  componentDidMount() {
    fetch('http://localhost:8080/applicants/find/' + this.props.params.id)
      .then(res => res.json())
      .then(response => { 
        this.setState({ response }) 
      })
  }

  render() {
    return (
      <div>
        <h2>Applicants - {this.props.params.id}</h2>

        <div>{this.state.response.name}</div>
        <div>{this.state.response.favColour}</div>
      </div>
    )
  }
}

export default Recruitment
