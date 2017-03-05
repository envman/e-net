import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import linkState from 'react-link-state'
import AuthService from './../../../utils/AuthService'

export class Applicant extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { id: '', name: '', favColour: '', email: '', comments: [], newComment: '' }
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
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

    if (this.state.newComment) {
      this.state.comments.push({user: 'test', message: this.state.newComment, date: new Date().toString(), email: this.props.auth.email() })
    }

    fetch('http://localhost:8080/applicants/update/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => { this.context.router.push("/auth/recruitment/") })
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
            <label>Name</label>
            <input type="text" className="form-control" valueLink={linkState(this, 'name')} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" valueLink={linkState(this, 'email')} />
          </div>

          {this.state.comments.map(c =>
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>{c.email}</strong> <span className="text-muted">{c.date}</span>
                </div>
                <div className="panel-body">
                {c.message}
                </div>
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control" rows="5" id="comment" valueLink={linkState(this, 'newComment')}></textarea>
          </div>

          <button type="button" onClick={this.save} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

Applicant.contextTypes = {
    router: React.PropTypes.object
}


export default Applicant
