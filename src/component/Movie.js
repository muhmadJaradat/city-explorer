import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class Movie extends React.Component {
    render() {
        return (
            <>
            <h1 style={{textAlign:'center',marginTop:'50px',marginBottom:'50px'}} > Movies  </h1>
            <Container>
            <Row >
            {
                this.props.movieData.map(data=>
                    (
                        <Col>
                  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={data.imageURl} />
  <Card.Body>
    <Card.Title style={{textAlign:'center',fontSize:'30px'}}>{data.title}</Card.Title>
    <Card.Text className='movieDes'>
     {data.overView}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" style={{textAlign:'center'}}>
    <ListGroupItem >Average votes : {data.avgVotes}</ListGroupItem>
    <ListGroupItem >Total votes : {data.totalVotes}</ListGroupItem>
    <ListGroupItem>Popularity : {data.popularity}</ListGroupItem>
    <ListGroupItem>Released On : {data.releasedOn}</ListGroupItem>
  </ListGroup>
 
</Card>
                        </Col>
                    ))
                
            }
            
            </Row>
            </Container>
            
                        </>
        )
    }
}

export default Movie
