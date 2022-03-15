import React from 'react';

const weatherData = (props) => {
    return (
        <div>{/* conditional if*/}
            { 
                props.error && 
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {/**conditional temperature */}
            {
                props.temperature ?
                <div>
                    <div className="card card-body">
                        <p><i className="fas fa-globe-americas"></i>
                            Location: {props.city}, {props.country}
                        </p>
                        <p><i class="fas fa-temperature-low"></i>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p><i className="fas fa-water"></i>
                            Humidity: {props.humidity}
                        </p>
                        <p><i className="fas fa-wind"></i>
                            Wind Speed: {props.windSpeed}
                        </p>
                    </div>
                </div>
                : <div className="card card-body">
                    <p>No request Yet</p>
                </div>
            }
            
        </div>
        
    )

}

export default weatherData;