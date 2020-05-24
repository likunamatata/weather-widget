import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Update from './components/Update'
import Display from './components/Display'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const appId = ',us&appid=709847967f5e54b97308c1b2cae4dee5'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstZip: 10036,
      updatedZip: '',
      weatherData: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async componentDidMount() {
    const zip = this.state.firstZip
    this.getData(zip)
  }

  async getData(zip) {
    const response = await axios.get(baseUrl + zip + appId)
    this.setState({
      weatherData: response.data
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate(event) {
    event.preventDefault()
    const zip = this.state.updatedZip
    this.getData(zip)
  }


  render() {
    return (
      <div className="App">
        <Display weatherData={this.state.weatherData}/>
        <Update handleChange={this.handleChange} handleUpdate={this.handleUpdate}/>
      </div>
    );
  }

}

export default App;
