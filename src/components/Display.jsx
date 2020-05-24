import React from 'react'

export default function Display(props) {
  console.log('display', props)
  const { weatherData } = props
  return (
    <div className='display'>
      <div className='display-summary'>
        <div className='summary-header'>
          <p>{weatherData.name}</p>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
        </div>
          <p>{weatherData.weather[0].description}</p>
      </div>

      <div className='display-temperature'>
        <p>kelvin {weatherData.main.temp}</p>
        <div className='min-max'>
          <p>kelvin {weatherData.main.temp_min}</p>
          <p>kelvin {weatherData.main.temp_max}</p>
        </div>
      </div>

    </div>
  )
}