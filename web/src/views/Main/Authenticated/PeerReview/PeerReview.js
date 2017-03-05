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

  send = () => {
    console.log('send')

    
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
                        {r.members.map((e, i) => <ListItem primaryText={e.name + ' - ' + e.email} key={i}/>)}
                        <CardActions>
                          <FloatingActionButton onClick={this.send} mini={true} secondary={true}>
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

export default PeerReview
