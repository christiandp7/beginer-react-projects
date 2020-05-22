import React, { useState } from 'react'
import '../assets/Weather.css'

const api = {
  key: 'b20f7d5bc077e68d67316244fdc560ef',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(''); 

    const search = evt => {
      if(evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(resjson => {
            setWeather(resjson);
            setQuery('');
            console.log(resjson);
          })
          .catch(err => console.log(err));
      }
    }

    const dateBuilder = d => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let date = d.getDate();
      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      
      return `${day} ${date} ${month} ${year}`
    }


    return (
        <div className={
          (typeof weather.main != "undefined")
          ? ((weather.main.temp > 16) ? 'weather-app warm' : 'weather-app') : 'weather-app'
        }>
          <main>
            <div className="search-box">
              <input 
                type="text" 
                className="search-bar" 
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            {(typeof weather.main != "undefined") ? (
              <>
              <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°C
                </div>
              <div className="weather">{weather.weather[0].main}</div>
              </div>
              </>
            ) : ('')}

          </main>
        </div>
    )
}

export default Weather
