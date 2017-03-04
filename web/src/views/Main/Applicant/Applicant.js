import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'

export class Recruitment extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    fetch('http://localhost:8080/applicant/')
      .then(res => res.json())
      .then(response => { this.setState({ response }) })
  }

  render() {
    return (
      <div>
        <h2>Applicant - {this.props.params.id}</h2>
      </div>
    )
  }
}

export default Recruitment
