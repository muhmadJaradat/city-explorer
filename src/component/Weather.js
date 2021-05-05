import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export class Weather extends React.Component {
    render() {
        return (
            <>
<h1 style={{textAlign:'center',marginTop:'30px'}} > Weather-Forcast for {this.props.weatherData[0].cityName} </h1>
<Container>
<Row >
{
    this.props.weatherData.map(data=>
        (
            <Col>
            <Card style={{ width: '18rem',marginBottom:'20px',padding:'20px',textAlign:'center' }}>
  <Card.Title>On {data.date}</Card.Title>
  <Card.Text>Maximum Temperature about {data.maxTemp}&#8451;</Card.Text>
  <Card.Text>Minimum Temperature about {data.lowTemp}&#8451; </Card.Text>
  <Card.Text>The weather will have{data.description}</Card.Text>
  
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
