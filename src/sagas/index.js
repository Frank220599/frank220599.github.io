import {call, put, takeLatest} from 'redux-saga/effects'
import {CURRENT_WEATHER_SUCCESS, CURRENT_WEATHER_FAILURE} from '../actions/types'
import api from '../api/index'

function* getCurrentWeather(action) {
    try {

        const {data} = yield call(api.request.get, `/data/2.5/weather?id=${action.payload.cityId}`);

        const otherDaysData = yield call(api.request.get, `/data/2.5/forecast?id=${action.payload.cityId}`);

        yield put({
            type: CURRENT_WEATHER_SUCCESS,
            payload: {data, otherDaysData: otherDaysData.data.list}
        })


    } catch (e) {

        yield put({
            type: CURRENT_WEATHER_FAILURE
        })

    }
}


export default function* watchFetchData() {
    yield takeLatest('CURRENT_WEATHER_REQUEST', getCurrentWeather);
}
