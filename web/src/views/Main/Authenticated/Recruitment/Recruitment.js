import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router'

export class Recruitment extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { response: [] }
  }

  componentDidMount() {

    console.log('mounted')

    fetch('http://localhost:8080/applicants/list')
      .then(res => res.json())
      .then(response => { 
        console.log('response', response)
        this.setState({ response }) 
      })
  }

  render() {
    return (
      <div>
        <h2>Recruitment</h2>

        <ul>
          {this.state.response.map((r) => <li><Link to={"/auth/applicant/" + r.id}>{r.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Recruitment
