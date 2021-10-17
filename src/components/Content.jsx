import React from "react";

function Content(props) {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                {props.data.name}
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div>
                    <img
                        src={`http://openweathermap.org/img/wn/${props.data.weather.summary.icon}.png`}
                        title={props.data.weather.summary.description} alt={props.data.weather.summary.description}/>
                </div>
                <div>
                    {props.data.weather.summary.title}
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                Actual: {props.data.weather.temperature.actual}<br/>
                Feels like: {props.data.weather.temperature.feelsLike}<br/>
                Min: {props.data.weather.temperature.min}<br/>
                Max:{props.data.weather.temperature.max}<br/>
            </div>
        </div>
    )
}

export default Content;