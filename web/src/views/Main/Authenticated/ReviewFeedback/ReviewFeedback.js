import React from 'react'

export class ReviewFeedback extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {response: []}
  }

  componentDidMount() {
    fetch('http://localhost:8080/reviews/feedback/' + this.props.params.id)
      .then(res => res.json())
      .then(response => {
        this.setState({ response })
      })
  }

  send = () => {
    fetch('http://localhost:8080/reviews/groups/')
      .then(res => res.json())
      .then(response => {
        let user = response
          .filter(g => g.members.filter(m => m.id === this.props.params.id).length > 0)
          .map(g => g.members.filter(m => m.id === this.props.params.id)[0])[0]

        let email = user.email

        fetch('http://localhost:8080/email/send', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            text: 'Your review feedback is now available\nPlease See:\nhttp://localhost:3000/feedback/' + this.props.params.id
          })
        })
        .then(r => {
          this.context.router.push("/auth/review/")
        })
      })
  }

  render() {
    return (
      <div>
        <h2>Feedback</h2>

        {this.state.response.map(r =>
          <div>
            <form>
              <div className="form-group">
                <label>Good Stuff</label>
                <textarea disabled className="form-control" rows="5" id="comment" value={r.good}></textarea>
              </div>

              <div className="form-group">
                <label>Bad Stuff</label>
                <textarea disabled className="form-control" rows="5" id="comment" value={r.bad}></textarea>
              </div>
            </form>
          </div>
        )}

        <button type="button" onClick={this.send} className="btn btn-primary">Send Feedback</button>
      </div>
    )
  }
}

ReviewFeedback.contextTypes = {
    router: React.PropTypes.object
}

export default ReviewFeedback;
