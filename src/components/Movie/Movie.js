import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


export class Movie extends React.Component {
  render() {
    console.log(this.props.imageURl);
    return (
   
          
            
         <Col>
                  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageURl} />
  <Card.Body>
    <Card.Title style={{textAlign:'center',fontSize:'30px'}}>{this.props.title}</Card.Title>
    <Card.Text className='movieDes'>
     {this.props.overView}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" style={{textAlign:'center'}}>
    <ListGroupItem >Average votes : {this.props.avgVotes}</ListGroupItem>
    <ListGroupItem >Total votes : {this.props.totalVotes}</ListGroupItem>
    <ListGroupItem>Popularity : {this.props.popularity}</ListGroupItem>
    <ListGroupItem>Released On : {this.props.releasedOn}</ListGroupItem>
  </ListGroup>
 
</Card>
                        </Col>
                       
           
     
    )
  }
}

export default Movie
