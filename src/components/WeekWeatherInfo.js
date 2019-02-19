import React from 'react'
import {month, days} from '../api/time'

const WeekWeatherInfo = ({day, index}) => (
    <li className={"weather_info_item"}>
        <div className={"date"}>
            {month[day.dt_txt.substring(6, 7) - 1]} {new Date().getDate() + index}
        </div>
        <div className={"day_name"}>{days[new Date().getDay() + index]}</div>
        <div className={"temperature"}>{Math.floor(day.main.temp)}<sup>o</sup></div>
        &nbsp;
        <div className={"weather_icon"}>icon</div>
    </li>
)

export default WeekWeatherInfo;