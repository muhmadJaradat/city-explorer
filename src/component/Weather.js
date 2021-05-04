import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export class Weather extends React.Component {
    render() {
        return (
            <>
<h1 style={{textAlign:'center',marginTop:'30px'}} > Weather-Forcast </h1>
<Container>
<Row >
{
    this.props.weatherData.map(data=>
        (
            <Col>
            <Card style={{ width: '18rem',marginBottom:'20px',padding:'20px' }}>
  <Card.Text>date:{data.date}</Card.Text>
  <Card.Text>description:{data.description}</Card.Text>
  
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

export default Weather
