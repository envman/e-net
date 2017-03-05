import React, { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'

export class Home extends React.Component {
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
      </div>
    )
  }
}

export default Home;
