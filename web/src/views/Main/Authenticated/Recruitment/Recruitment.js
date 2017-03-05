import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import linkState from 'react-link-state'

export class Recruitment extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { response: [], newName: '' }
  }

  componentDidMount() {

    console.log('mounted')

    this.reload()
  }

  reload() {
    fetch('http://localhost:8080/applicants/list')
      .then(res => res.json())
      .then(response => {
        console.log('response', response)
        this.setState({ response })
      })
  }

  createNew = () => {
    fetch('http://localhost:8080/applicants/update/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.newName })
    })
    .then(() => {
       console.log("Done")
       this.reload()
     })
    .catch((err) => {
        console.log('broken!');
    })
  }

  render() {
    return (
      <div>
        <h2>Recruitment</h2>

        <form>
          <div className="form-group">
            <input type="text" valueLink={linkState(this, 'newName')} />

            <button type="button" onClick={this.createNew} className="btn btn-primary">Create New</button>
          </div>


        </form>

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
