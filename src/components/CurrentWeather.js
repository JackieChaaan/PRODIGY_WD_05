import React from 'react';
import './CurrentWeather.scss';
import LocalTime from './LocalTime';
import WeatherAnimation from './WeatherAnimation';


function CurrentWeather({ weatherData }) {
    if (!weatherData) {
        return <p>Loading current weather...</p>; // Handle loading state
    }

    const { location, current } = weatherData;
    const localTime = location.localtime;

    return (
        <aside className='current_weather'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                    <div className="current-weather-wrapper">
                        <p className='location-name'>Current Weather in {location.name}</p>
                        <p className='local-time'>
                            <LocalTime localtime={localTime} />
                        </p>
                        <p className='region'>
                            {location.region}, {location.country}
                        </p>
                        <div className="current-pressure">
                            <div className="wrapper">
                                <div className='icon'>
                                    {current.condition.icon ? <img src={current.condition.icon} alt="icon" /> : null}
                                </div>
                                <div className='current-temp'>
                                    <span className='temperature'>{current.temp_c}</span><span className='unit'>°C</span></div>
                            </div>
                            <div className="condition-wrapper">
                                <div className='current-condition'>{current.condition.text}</div>
                                <div className='feels-like'>Feels Like {current.feelslike_c}°</div>
                            </div>
                        </div>
                        <div className="diff-measures">
                            <div className="temp_f measure">
                                <span className='def-measure'>Temperature:</span><span className='def-unit'>{current.temp_f}°F</span>
                            </div>
                            <div className="pressure measure">
                                <span className='def-measure'>Pressure:</span><span className='def-unit'>{current.pressure_in} in</span>
                            </div>
                            <div className="humidity measure">
                                <span className='def-measure'>Humidity:</span><span className='def-unit'>{current.humidity}%</span>
                            </div>
                            <div className="wind measure">
                                <span className='def-measure'>Wind:</span><span className='def-unit'>{current.wind_kph} kph</span>
                            </div>
                            <div className="visibility measure">
                                <span className='def-measure'>Visibility:</span><span className='def-unit'>{current.vis_miles} km</span>
                            </div>
                            <div className="dewpoint measure">
                                <span className='def-measure'>Dew Point:</span><span className='def-unit'>{current.dewpoint_c}°</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                    <WeatherAnimation currentDatas = {current}/>
                </div>
            </div>
        </aside>
    );
}

export default CurrentWeather;
