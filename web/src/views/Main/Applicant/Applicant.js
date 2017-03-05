import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import linkState from 'react-link-state'
import AuthService from './../../../utils/AuthService'
import FileUpload from '../../../apiCalls/fileUpload'

export class Applicant extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { id: '', name: '', favColour: '', email: '', comments: [], newComment: '', files: [], status: '', role: '' }
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  componentDidMount() {
    fetch('http://localhost:8080/applicants/find/' + this.props.params.id)
      .then(res => res.json())
      .then(response => {
        response.comments = response.comments || []
        response.status = response.status || 'New'

        this.setState(response)
      })
  }

  save = () => {
    this.state.id = this.props.params.id

    if (this.state.newComment) {
      this.state.comments.push({user: 'test', message: this.state.newComment, date: new Date().toString(), email: this.props.auth.email() })
    }

    delete this.state.newComment

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

          <div className="form-group">
            <label>Role</label>
            <select className="form-control" id="exampleSelect1" valueLink={linkState(this, 'role')} >
              <option>Software Developer - Graduate</option>
              <option>Software Developer - Year Placement</option>
              <option>Software Developer - Summer Internship</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select className="form-control" id="exampleSelect1" valueLink={linkState(this, 'status')} >
              <option>New</option>
              <option>CV Recieved</option>
              <option>Form Recieved</option>
              <option>Pending Interview</option>
              <option>Interviewed</option>
              <option>Rejected</option>
              <option>Offered</option>
              <option>Offer Accepted</option>
            </select>
          </div>

          <FileUpload applicantid={this.props.params.id}></FileUpload>

          {this.state.files.map(f => <a href={"http://localhost:8080/applicants/download/" + f + "/" + this.props.params.id}>{f}</a>)}

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
