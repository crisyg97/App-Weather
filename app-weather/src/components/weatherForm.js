import React from 'react';

const weatherForm = (props) => {
    return (
        <div className="Card card-body">
            <form onSubmit= {props.GetWeather} class="border p-3 form">
                <div className="form-group">
                    <input type="text" name="city" placeholder="your city name" className="form-control" autoFocus/>{/*autofocus= cursos parpadeando */} 
                </div>
                <br></br>
                <div className="form-group">
                    <input type="text" name="country" placeholder="your country name" className="form-control"/>
                </div>
                <br></br>
                <button className="btn btn-success btn-block">
                    Get Weather
                </button>
            </form>
        </div>
    )
}

export default weatherForm;