import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
export class OneDayWeather extends React.Component {
    render() {
        return (
            <div>
              <Col>
            <Card style={{ width: '18rem',marginBottom:'20px',padding:'20px',textAlign:'center' }}>
  <Card.Title>On {this.props.date}</Card.Title>
  <Card.Text>Maximum Temperature about {this.props.maxTemp}&#8451;</Card.Text>
  <Card.Text>Minimum Temperature about {this.props.lowTemp}&#8451; </Card.Text>
  <Card.Text>The weather will have{this.props.description}</Card.Text>
  
</Card>
            </Col>  
            </div>
        )
    }
}

export default OneDayWeather
