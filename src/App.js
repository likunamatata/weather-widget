import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const appId = ',us&appid=709847967f5e54b97308c1b2cae4dee5'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstZip: 10036,
      weatherData: ''
    }
  }

  async componentDidMount() {
    const {firstZip} = this.state
    const response = await axios.get(baseUrl + firstZip + appId)
    this.setState({
      weatherData: response.data
    })
  }

  render() {
    console.log('weather-data', this.state.weatherData)
    return (
      <div className="App">
      </div>
    );
  }

}

export default App;
