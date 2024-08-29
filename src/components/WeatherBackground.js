import React, { useEffect, useState } from 'react';
import clearskyVideo from '../assets/clear_sky.mp4';
import cloudyVideo from '../assets/cloudy.mp4';
import drizzleVideo from '../assets/drizzle.mp4';
import hazeVideo from '../assets/haze.mp4';
import mistVideo from '../assets/mist.mp4';
import partlycloudyVideo from '../assets/partly_cloudy.mp4';
import rainVideo from '../assets/rain.mp4';
import sandstormVideo from '../assets/sandstorm.mp4';
import sleetVideo from '../assets/sleet.mp4';
import snowVideo from '../assets/snow.mp4';
import thunderstormVideo from '../assets/thunder_storm.mp4';
import windyVideo from '../assets/windy.mp4';
import './WeatherBackground.scss';

// Define keywords and corresponding videos
const weatherVideos = [
  { keywords: ['clear sky', 'sunny'], video: clearskyVideo },
  { keywords: ['cloudy'], video: cloudyVideo },
  { keywords: ['drizzle'], video: drizzleVideo },
  { keywords: ['haze'], video: hazeVideo },
  { keywords: ['mist', 'fog'], video: mistVideo },
  { keywords: ['partly cloudy'], video: partlycloudyVideo },
  { keywords: ['rain', 'light rain', 'moderate rain', 'heavy rain', 'patchy rain', 'light rain showers'], video: rainVideo },
  { keywords: ['sandstorm', 'dust'], video: sandstormVideo },
  { keywords: ['sleet'], video: sleetVideo },
  { keywords: ['snow', 'light snow', 'moderate snow', 'heavy snow'], video: snowVideo },
  { keywords: ['thunderstorm', 'storm'], video: thunderstormVideo },
  { keywords: ['wind'], video: windyVideo },
];

function WeatherBackground({ condition }) {
  const [videoSrc, setVideoSrc] = useState(rainVideo);

  useEffect(() => {
    const normalizedCondition = condition.toLowerCase().trim();
    
    const matchedVideo = weatherVideos.find(({ keywords }) =>
      keywords.some(keyword => normalizedCondition === keyword)
    );

    setVideoSrc(matchedVideo ? matchedVideo.video : rainVideo);

  }, [condition]);

  return (
    <div className="weather-background">
      {videoSrc && (
        <video key={videoSrc} autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default WeatherBackground;
