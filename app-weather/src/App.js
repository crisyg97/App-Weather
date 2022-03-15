import React, { Component } from 'react';
//components
import WeatherInfo from './components/weatherData';
import WeatherForm from './components/weatherForm';
import { API_KEY } from './keys';

class App extends Component {

  state = {
    temperature: '',
    description: '',
    humidity: '',
    windSpeed: '',
    city: '',
    country: '',
    error: null,
  }

  GetWeather = async (e) =>{
    e.preventDefault(); //evitar reinicio pagina
    //obteniendo city y country del form
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
  
    var infoWeather = ""; //datos almacenados sacados de la consulta

    if(cityValue && countryValue){
      const API_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;
      console.log(API_url);
      //ejecucion consulta
      const res = await fetch(API_url)
        .then(res => res.json())
        .then(data => {
          infoWeather = data;
          console.log(data)
        });

        this.setState({
          temperature: infoWeather.main.temp,
          description: infoWeather.weather[0].description,
          humidity: infoWeather.main.humidity,
          windSpeed: infoWeather.wind.speed,
          city: infoWeather.name,
          country: infoWeather.sys.country,
          error: null
        }, () => {console.log(this.state)})
    }else{
      this.setState({
        error: 'Please enter a City and Country'
      })
    }
  }

  render(){
    return (
      <div className="container p-4" >
        <div className="row">
          <div className="col-md-6">
            <WeatherForm GetWeather={this.GetWeather}/>
            <WeatherInfo {...this.state}/>
          </div>
        </div>
      </div>
  );
  }
  
}

export default App;
