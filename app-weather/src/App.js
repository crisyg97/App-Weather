import React, { Component } from 'react';
//components
import WeatherInfo from './components/weatherData';
import WeatherForm from './components/weatherForm';
//image
//import image from './src/assets/cielo-nubes';

function App() {
  {/*
      const StyleImg = {
        display: 'inline-block',
        background: url($image) 
      };
  */}
  return (
    <div>   
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <WeatherForm/>
            <WeatherInfo/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
