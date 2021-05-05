
import React from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import City from './component/City'
import Error from './component/Alert'
import Weather from './component/Weather'
import Movie from'./component/Movie'
require('dotenv').config()


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query:'',
      data: '',
      status:'',
      message:'',
      weatherData:'',
      weatherShow:false,
      movieShow:false,
      movieData:'',
    }
  }
  getLocation = async (e)=> {
    e.preventDefault();
    
    try {
      const url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.query}&format=json`;
      const reqData= await axios.get(url);
    
    this.setState({
      data:reqData.data[0],
      status:reqData.status,
      
    })}
    catch(err) {
this.setState({
  message:err.response.data.error,
  status:err.response.status
})

    }
    
    this.getWeather();
    this.getMovie();
  }
  updateData = (e)=>{
    this.setState({
      query:e.target.value,
    })
  
  }
  getWeather=async ()=>{
    
    
      const WeatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`
      const reqWeatherData=await axios.get(WeatherUrl);
this.setState({
  weatherData:reqWeatherData.data,
  weatherShow:true,
}) 

  }
  getMovie=async ()=>{
    
    console.log(this.state.city);
    const movieUrl = `${process.env.REACT_APP_SERVER}/movie?query=${this.state.query}`
    const reqMovieData=await axios.get(movieUrl);
this.setState({
movieData:reqMovieData.data,
movieShow:true

}) 

}


  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>City Explorer</h1>
        <Form className='form'>
  <Form.Group controlId="formBasicEmail" >
    
    <Form.Control onChange={this.updateData} type="text" placeholder="Enter a city name" name='name' style={{textAlign:'center'}} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.getLocation}>
    Explore!
  </Button>
</Form>
{(Number(this.state.status)===200) ? <> <City query={this.state.query} data={this.state.data} show={this.state.show} /> </>
:(this.state.status!=='')? <Error  status={this.state.status} message={this.state.message}  />:null }

{
  this.state.weatherShow && <Weather weatherData={this.state.weatherData}/> 
}
{
  this.state.movieShow && <Movie movieData={this.state.movieData}/>
}
      </div>
  
    )
  }
}

export default App
