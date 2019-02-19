import React from 'react'

const DayWeatherInfo = ({day}) => (
    <li className={"weather_info_item"}>
        <div className={"date"}>{day.dt_txt.substring(11,16)}</div>
        <div className={"day_name"}>{day.weather[0].main}</div>
        <div className={"temperature"}>{Math.floor(day.main.temp)}<sup>o</sup></div>&nbsp;
        <div className={"weather_icon"}>icon</div>
    </li>
)

export default DayWeatherInfo;