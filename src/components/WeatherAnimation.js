import React from 'react';
import Lottie from 'lottie-react';
import day_animationData from '../assets/animations/Animation_day2.json';
import night_animationData from '../assets/animations/Animation_night2.json';

function WeatherAnimation({currentDatas}) {
    let animationData;
    currentDatas.is_day? animationData = day_animationData  : animationData = night_animationData;

    
    return (
        <Lottie 
            animationData={animationData} 
            loop 
            autoplay 
            style={{ height: '100%', width: '100%', maxHeight : '300px' }} 
        />
    );
}

export default WeatherAnimation;

