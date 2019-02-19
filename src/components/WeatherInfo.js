import React, {Component, Fragment} from "react"
import DayWeatherInfo from "./DayWeatherInfo";
import WeekWeatherInfo from "./WeekWeatherInfo";
import moment from 'moment'

class WeatherInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "day"
        }
    }

    viewChange = (view) => {
        this.setState({
            view
        });
    };

    defineClass = view => this.state.view === view ? "active" : null;


    render() {

        return (
            <div className={"weather_side_info"}>
                <div className="tab">
                    <ul>
                        <li
                            onClick={() => this.viewChange("day")}
                            className={this.defineClass("day")}
                        >Hourly
                        </li>
                        <li
                            onClick={() => this.viewChange("week")}
                            className={this.defineClass("week")}
                        >5 days
                        </li>
                    </ul>
                </div>
                <ul className={"day_list"}>
                    {
                        this.state.view === "day"
                            ?
                            <Fragment>
                                {
                                    this.props.otherDaysData.map((day, index) => <DayWeatherInfo day={day}
                                                                                                 index={index}/>)
                                }
                            </Fragment>
                            :
                            <Fragment>
                                {
                                    this.props.otherDaysData.map((item, index) => {
                                        if (moment.unix(item.dt).format('HH:mm') === '11:00' && moment().format('DD/MM/YYYY') !== moment.unix(item.dt).format('DD/MM/YYYY')) {
                                            return <WeekWeatherInfo day={item} index={index}/>
                                            console.log(item)
                                        }
                                    })
                                }
                            </Fragment>

                    }
                </ul>
            </div>)

    }
}

export default WeatherInfo;