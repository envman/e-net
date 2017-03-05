import React, { PropTypes as T } from 'react'

import { Button } from 'react-bootstrap'

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
        <div className="container-fluid">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bob San</td>
                <td>Software Developer</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Recruitment
