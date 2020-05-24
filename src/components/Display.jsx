import React from 'react';
import styles from '../styles/Display.module.css';
import { kelvinToCelsius, capitalize } from '../services/display-helpers';

export default function Display(props) {
  const { weatherData } = props;
  const { main } = weatherData;
  const { description, icon } = weatherData.weather[0];

  return (
    <div className={styles.display}>

      <div className={styles.displaySummary}>
        <div className={styles.summaryHeader}>
          <p className={styles.cityName}>{weatherData.name}</p>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} />
        </div>
        <p className={styles.summaryDescription}>{capitalize(description)}</p>
      </div>

      <div className={styles.displayTemp}>
        <p>{kelvinToCelsius(main.temp)}</p>
        <div className={styles.minMax}>
          <p>{kelvinToCelsius(main.temp_min)}</p>
          <p>{kelvinToCelsius(main.temp_max)}</p>
        </div>
      </div>

    </div>
  );
}