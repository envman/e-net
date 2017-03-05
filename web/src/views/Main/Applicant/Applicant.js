import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import linkState from 'react-link-state'

export class Recruitment extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { id: '', name: '', favColour: '', email: '', comments: [] }
  }

  componentDidMount() {
    fetch('http://localhost:8080/applicants/find/' + this.props.params.id)
      .then(res => res.json())
      .then(response => {
        response.comments = response.comments || []
        this.setState(response)
      })
  }

  save = () => {
    this.state.id = this.props.params.id

    console.log('body', this.state)

    fetch('http://localhost:8080/applicants/update/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => { console.log("Done") })
      .catch((err) => {
        console.log('broken!');
      })
  }

  render() {
    return (
      <div>
        <h2>Applicant - <i>{this.state.name}</i></h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" valueLink={linkState(this, 'name')} />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="text" className="form-control" valueLink={linkState(this, 'email')} />
          </div>
          <button type="button" onClick={this.save} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default Recruitment
