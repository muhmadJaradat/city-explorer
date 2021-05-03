
import React from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import City from './component/City'
import Error from './component/Alert'
require('dotenv').config()


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query:'',
      data: '',
      show:false,
      status:''
    }
  }
  getLocation = async (e)=> {
    e.preventDefault();
    try {const url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.query}&format=json`;
    const reqData= await axios.get(url);
    console.log(reqData);
    this.setState({
      data:reqData.data[0],
      show:true,
      status:reqData.status
    })}
    catch(err) {
console.log(err);
    }
  }
  updateData = (e)=>{
    this.setState({
      query:e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Form>
  <Form.Group controlId="formBasicEmail" >
    
    <Form.Control onChange={this.updateData} type="text" placeholder="Enter a city name" name='name' />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.getLocation}>
    Explore!
  </Button>
</Form>
{(Number(this.state.status)===200) ? <City query={this.state.query} data={this.state.data} show={this.state.show} />:null }


      </div>
  
    )
  }
}

export default App




