import React from 'react'
import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'
import OneDayWeather from './OneDayWeather'

export class Weather extends React.Component {
    render() {
        return (
            <>
<h1 style={{textAlign:'center',marginTop:'30px'}} > Weather-Forcast for {this.props.weatherData[0].cityName} </h1>
<Container>
<Row >
{
    this.props.weatherData.map(data=>
        
          <OneDayWeather
            date={data.date}
            maxTemp={data.maxTemp}
            lowTemp={data.lowTemp}
            description={data.description} />
            
        )
    
}

</Row>
</Container>

            </>
        )
    }
}

export default Weather
