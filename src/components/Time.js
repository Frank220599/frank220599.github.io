import React from 'react'
import {days, month} from "../api/time";

const Time = ({date}) => (
    <div className="date">
        <div className="time">
            <span>{date.getHours()}</span>:
            <span>{date.getMinutes()}</span>:
            <span>
                {
                    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
                }
            </span>
        </div>
        <div className={"date_info"}>
            <span>{month[date.getDay()]}, </span>
            <span>{days[date.getMonth()]} </span>
            <span>{date.getDate()}, </span>
            <span>{date.getFullYear()}</span>
        </div>
    </div>
);

export default Time;