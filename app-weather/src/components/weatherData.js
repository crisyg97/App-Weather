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
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature}, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity}
                        </p>
                        <p>
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