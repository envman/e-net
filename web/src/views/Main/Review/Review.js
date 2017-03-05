import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import linkState from 'react-link-state'
import AuthService from './../../../utils/AuthService'
import FileUpload from '../../../apiCalls/fileUpload'

export class Review extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { good: '', bad: '' }
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  componentDidMount() {
    fetch('http://localhost:8080/reviews/find/' + this.props.params.id)
      .then(res => res.json())
      .then(response => {
        this.setState(response)
      })
  }

  save = () => {
    // this.state.id = this.props.params.id

    console.log(this.state)

    fetch('http://localhost:8080/reviews/review/' + this.props.params.fromId + '/' + this.props.params.toId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        // this.context.router.push("/auth/recruitment/")
        console.log('done')
      })
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
            <label>Good Stuff</label>
            <textarea className="form-control" rows="5" id="comment" valueLink={linkState(this, 'good')}></textarea>
          </div>

          <div className="form-group">
            <label>Bad Stuff</label>
            <textarea className="form-control" rows="5" id="comment" valueLink={linkState(this, 'bad')}></textarea>
          </div>

          <button type="button" onClick={this.save} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

Review.contextTypes = {
    router: React.PropTypes.object
}


export default Review
