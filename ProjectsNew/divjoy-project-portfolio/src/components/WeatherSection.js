import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function useFetch(details) {
  //destructure details here to be used in useEffect hook.
  const { url, headers } = details;
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState();
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": headers.key,
          "x-rapidapi-host": headers.host
        }
      })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsFetching(false);
      })
      .catch(exception => {
        console.error(exception);
        setIsFetching(false);
      });
    }
    getData();
  }, []);
  return { data: data, isFetching: isFetching };
}

function WeatherSection() {
  // todo -->move these keys to a private .env file<--
  //private keys, Constant Variables
  const URL = "https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus";
  const KEY = "ac72153c36mshd1814c8f1af20f3p1518fbjsnabee85184908" || process.env.REACT_APP_KEY;
  const HOST = "community-open-weather-map.p.rapidapi.com" || process.env.REACT_APP_HOST;
  //arrange the variables appropriately
  const headers = { key: KEY, host: HOST }; //arrange headers payload
  const response = useFetch({ url: URL, headers: headers }); //useFetch hook to handle onPageLoad
  const defaultForecast = []; //set empty array to hold 5 days worth of forecast data
  try {
    // to format the data structure to be strictly a 5-day forecast, we'll use this "for loop" to divide the 40 "3-hour" record lines by 8. Which will return just 5 days worth of data then.
    for (let i = 0; i < 40; i += 8) {
      // We'll then need to append this newly formated data structure to an empty array variable to then later set in state.
      defaultForecast.push(response.data.list[i]);
    }
  } catch (exception) {
    console.error(exception); //handle any errors
  }

  const [forecast, setForecast] = useState();
  const [city, setCity] = useState();

  function getForecast(e) {
    e.preventDefault();
    const fiveDayForecast = [];
    if (
      city.split(" ").length > 2 ||
      city === ""
    ) {
      setCity("");
      alert("Please enter a city.");
    } else {
      fetch(URL, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": KEY,
          "x-rapidapi-host": HOST
        }
      })
      .then(response => response.json())
      .then(data => {
        
        // to format the data structure to be strictly a 5-day forecast, we'll use this "for loop" to divide the 40 "3-hour" record lines by 8. Which will return just 5 days worth of data then.
        for (let i = 0; i < 40; i += 8) {
          // We'll then need to append this newly formated data structure to an empty array variable to then later set in state.
          if (data) {
            fiveDayForecast.push(data.list[i]);
          }
        }
        setForecast(fiveDayForecast);
      })
      .catch(exception => {
        console.error(exception);
      });
    }
  }

  function getWeekDay(day) {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
  }

  return (
    <div className="App">
      <div className="container">
        <Row>
          {forecast ?
            forecast.map((weath, i) => (
              <WeatherCard 
                key={i}
                title={weath.weather[0].main}
                subtitle={weath.weather[0].id} 
                date={weath.dt_txt}
                temp={weath.main.temp}
                feelsLike={weath.main.feels_like}
                description={weath.weather[0].description} 
                icon={weath.weather[0].icon} 
                id={weath.weather[0].id} //used to acquire weather condition (i.e. thunderstorm with light rain)
                windDirection={weath.wind.deg}
                windSpeed={weath.wind.speed}
                link2="" 
              />
            )) :
              defaultForecast.map((weath, i) => (
                <WeatherCard 
                  key={i}
                  title={weath.weather[0].main}
                  subtitle={weath.weather[0].id} 
                  date={weath.dt_txt}
                  temp={weath.main.temp}
                  feelsLike={weath.main.feels_like}
                  description={weath.weather[0].description} 
                  icon={weath.weather[0].icon} 
                  id={weath.weather[0].id} //used to acquire weather condition (i.e. thunderstorm with light rain)
                  windDirection={weath.wind.deg}
                  windSpeed={weath.wind.speed}
                  link2="" 
                />
              ))
          }
        </Row>
      </div>
      <footer>
        <p>API details: <a href="https://openweathermap.org/" target="blank">https://openweathermap.org/</a></p>
      </footer>
    </div>
  );
}

export default WeatherSection;
