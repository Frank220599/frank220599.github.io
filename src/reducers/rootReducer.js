import {
    CURRENT_WEATHER_SUCCESS,
    CURRENT_WEATHER_REQUEST,
    CURRENT_WEATHER_FAILURE,
    WEEK_WEATHER_REQUEST
} from "../actions/types";

const initialState = {
    isLoading: true,
    data: {},
    otherDaysData: {},
    currentCityId: 1514588,
    currentCityName: 'Andijan'
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_WEATHER_REQUEST:
            return {
                ...state,
                isLoading: true,
                currentCityId: action.payload.cityId,
                currentCityName: action.payload.cityName
            };
        case CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                otherDaysData: action.payload.otherDaysData,
                isLoading: false
            };
        case CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};


export default rootReducer;