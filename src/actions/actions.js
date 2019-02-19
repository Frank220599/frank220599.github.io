import {CURRENT_WEATHER_REQUEST} from './types';

const getCurrentWeather = (cityId,cityName) => ({
    type: CURRENT_WEATHER_REQUEST,
    payload: {
        cityId,
        cityName
    }
});



export {getCurrentWeather}
