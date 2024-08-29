import React, { useRef } from 'react';
import './WeatherForcast.scss';

function WeatherForcast({ forcast_data }) {
    
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    if (!forcast_data) {
        return <p>Loading forecast data...</p>;
    }

    const { forecast } = forcast_data;

    return (
        <div className="weather-forecast">
            <h4 className="forcast-title">10 Day Forecast</h4>
            <div className="scroll-buttons">
                <button onClick={scrollLeft}>&lt; Previous</button>
                <button onClick={scrollRight}>Next &gt;</button>
            </div>
            <div className="forcast-tiles" ref={scrollContainerRef}>
                {forecast.forecastday.map((day) => (
                    <div className="forcast-data" key={day.date}>
                        <h5>{day.date}</h5>
                        <img src={day.day.condition.icon} alt={day.day.condition.text} />
                        <span>{day.day.condition.text}</span>
                        <p>MaxTemp: {day.day.maxtemp_c}°C</p>
                        <p>MinTemp: {day.day.mintemp_c}°C</p>
                        <p>AvgHumidity: {day.day.avghumidity}%</p>
                        <p>AvgVisibility: {day.day.avgvis_km} km</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherForcast;

