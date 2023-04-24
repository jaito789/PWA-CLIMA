import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getAuth, signInAnonymously} from 'firebase/auth';
import {getToken, onMessage} from "firebase/messaging";
import {messaging} from "./firebase";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { async } from '@firebase/util';
import { useState, useEffect } from 'react';






function App() {


/*const [currentCityIndex, setCurrentCityIndex] = useState(5);
const [weatherData, setWeatherData] = useState([]);
  const cities = ['Madrid', 'Barcelona', 'Paris', 'Berlin', 'Rome', 'Sonora', 'Sinaloa', 'Hermosillo', 'Jalisco', 'Ciudad de Mexico'];
  const fetchWeatherData = async () => {
    const city = cities[currentCityIndex];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb8c78d5f15dc590c735529204622ed1&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return { city, temperature: data.main.temp };
  };
  
  const handleFetchData = async () => {
    const newData = await fetchWeatherData();
    setWeatherData([...weatherData, newData]);
    setCurrentCityIndex((currentCityIndex + 1) % cities.length);
  };*/

  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async () => {
    const cities = ['Sinaloa', 'Hermosillo', 'Culiacan', 'Mexicali', 'Sonora'];
    const apiKey = 'bb8c78d5f15dc590c735529204622ed1';
    const units = 'metric';
    const promises = cities.map(async city => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
      const data = await response.json();
      return data;
    });
    const data = await Promise.all(promises);
    setWeatherData(data);
  };

  const WeatherBox = ({ data }) => (
    <div class="text-center">
      <div class="card" style={{"width" : "18rem"}}>
        <img class="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{float : 'left', paddingRight : '10px'}} alt="Title"/>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>{data.main.temp} °C</p>
          <br></br>
      </div>
    </div>
    
  );

  const weatherBoxes = weatherData.map((data, index) => <WeatherBox key={index} data={data} />);

  const login = ()=>{
    signInAnonymously(getAuth()).then(usuario=> console.log
      (usuario));
  }

  const activarMensajes = async ()=>{
    const token = await getToken(messaging, {
      vapidKey:"BLaUg0LXbVrZN8tHqkKXCzCV9X8XsSxAbTw2nADKdObA2f3-Cl1XpJQ_wYGwHFxx8VkIG5ssw61HoiTULjvc77w"
    }).catch(error => console.log("error al generar el token paps"));

    if(token) console.log("Este es tu token: "+ token);
    if(!token) console.log("No tienes token paps")
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })

  }, []);

  /*return (
    <div>
      <h1>Hola mundo</h1>
      <ToastContainer/>
      <button onClick={login
      }>Logearse</button>
      <button onClick={
        activarMensajes
      }>Generar token</button>
    </div>
  );*/

  
return (
<>
          <head>
              <meta charset="UTF-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
              <title>App Clima</title>

          </head>
          <body>
              <nav class="text-center bg-dark">
                  <a class="navbar-brand" href="#">Mi App De Clima</a>
                  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                      aria-expanded="false" aria-label="Toggle navigation"></button>
    <div> 
    <h1>Hola mundo</h1>
      <ToastContainer/>
      <button onClick={login
      }>Logearse</button>
      <button onClick={
        activarMensajes
      }>Generar token</button>
    </div>
              </nav>
              <div class="p-2 mb-4 bg-light rounded-3">
                  <div class="container-fluid">
                      <div class="row ">
                          <div class="col-md-7">
                              <div class="container">
                                  <div class="row">
                                  </div>
                              </div>
                          </div>
                          <div class="text-center">
                            <div>
                              <button onClick={getWeatherData} type="button" class="btn btn-primary d-block mx-auto">Get weather data</button>
                              {weatherBoxes}
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </body>
    </>
  );
}

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

isPushNotificationSupported()

export default App;


/*<div class="card" style={{"width" : "18rem"}}>
<img class="card-img-top p-2 mx-auto" src="https://i0.wp.com/climaya.com/wp-content/uploads/2019/06/cy-logo-512-512.png?fit=512%2C512&ssl=1" style={{float : 'left', paddingRight : '10px'}} alt="Title"/>
</div>
<ul>
  {weatherData.map(({ city, temperature }) => (
    <li key={city}>
      {city}: {temperature}°C
      <p>Humidity: {weatherData.main.humidity}%</p>
    </li>
    
  ))}
</ul>
<br/>
<div style={{"width" : "18rem"}}>
  <button onClick={handleFetchData} type="button" class="btn btn-primary d-block mx-auto">Puch</button>
</div>*/