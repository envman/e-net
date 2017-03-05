import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

export class PeerReview extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = { response: [] }
  }

  componentDidMount() {

    console.log('mounted')

    fetch('http://localhost:8080/reviews/list')
      .then(res => res.json())
      .then(response => {
        console.log('response', response)
        this.setState({ response })
      })
  }

  render() {
    return (
      <Table>
        <TableBody displayRowCheckbox={false}>
          {this.state.response.map((r, i) => (
            <TableRow key={i} style={{borderBottom:'none'}}>
              <TableRowColumn>
                <Card style={{boxShadow: 'none'}}>
                  {
                    i % 2 === 0
                      ? <CardHeader title={r.name} actAsExpander={true} style={{backgroundColor: 'rgba(127, 221, 233, 0.4)'}}/>
                      :<CardHeader title={r.name} actAsExpander={true}/>
                  }

                  <CardText expandable={true}>
                    <List>
                      {r.emails.map((e, i) => <ListItem primaryText={e} key={i}/>)}
                    </List>
                  </CardText>
                </Card>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default PeerReview
