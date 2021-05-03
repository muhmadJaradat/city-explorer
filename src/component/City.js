import React from 'react'
import Container from 'react-bootstrap/Container'
import {Row,Col,Card,ListGroup,Image}from 'react-bootstrap'


export class City extends React.Component {
    render() {
        return (
            <div>
                <Container style={{marginTop:'80px'}} >
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Header>{this.props.query}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Latitude:{this.props.data.lat}</ListGroup.Item>
    <ListGroup.Item>Longitude:{this.props.data.lon}</ListGroup.Item>
  </ListGroup>
</Card>
    </Col>
    <Col><Image 
    src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10&markers=size:small|color:red|${this.props.data.lat},${this.props.data.lon}`} fluid /></Col>
  </Row>
</Container>
            </div>
        )
    }
}

export default City
