import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class PeerReview extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { response: [] }
  }

  componentDidMount() {
    fetch('http://localhost:8080/reviews/groups')
      .then(res => res.json())
      .then(response => {
        this.setState({ response })
      })
  }

  send = (id) => {
    let group = this.state.response.filter(g => g.id == id)[0]

    let messages = []

    for (let fromPerson of group.members) {
      let message = fromPerson.name + ' Please Review\n'

      for (let toPerson of group.members) {
        if (toPerson.id != fromPerson.id) {
            message += toPerson.name + '\n'
            message += 'http://localhost:3000/review/' + fromPerson.id + '/' + toPerson.id + '\n'
        }
      }

      message += 'Thanks!'
      messages.push({
        message: message,
        to: fromPerson.email
      })
    }

    let proms = messages.map(m => {
      return fetch('http://localhost:8080/email/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: m.to,
          text: m.message
        })
      })
    })

    Promise.all(proms)
      .then(r => {
        console.log('all done')
      })
  }

  reviewFeedback = (id) => {
    this.context.router.push("/auth/reviewfeedback/" + id)
  }

  render() {
    return (
      <div className="container make-it-black">
        <Table>
          <TableBody displayRowCheckbox={false}>
            {this.state.response.map((r, i) => (
              <TableRow key={i} style={{borderBottom:'none'}}>
                <TableRowColumn style={{backgroundColor: 'white'}}>
                  <Card style={{boxShadow: 'none'}}>
                    {
                      i % 2 === 0
                        ? <CardHeader title={r.name} actAsExpander={true} style={{backgroundColor: 'rgba(127, 221, 233, 0.4)'}}/>
                        :<CardHeader title={r.name} actAsExpander={true}/>
                    }

                    <CardText expandable={true} style={{backgroundColor: '#FAFAFA'}}>
                      <List>
                        {r.members.map((e, i) => <ListItem onClick={() => this.reviewFeedback(e.id)} primaryText={e.name + ' - ' + e.email} key={i}/>)}
                        <CardActions>
                          <FloatingActionButton onClick={() => this.send(r.id)} mini={true} secondary={true}>
                           <ContentAdd />
                         </FloatingActionButton>
                        </CardActions>
                      </List>
                    </CardText>
                  </Card>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="col-xs-1 col-xs-offset-11">
          <FloatingActionButton style={{float: 'right'}}>
           <ContentAdd />
         </FloatingActionButton>
       </div>
      </div>
    )
  }
}

PeerReview.contextTypes = {
    router: React.PropTypes.object
}

export default PeerReview
