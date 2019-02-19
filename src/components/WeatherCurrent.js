import React, {Component} from "react"
import Time from '../components/Time'


class WeatherCurrent extends Component {

    state = {
        date: new Date()
    };


    getTime = () => {
        setInterval(() => {
            this.setState({
                date: new Date()

            })
        }, 1000)
    };

    render() {

        const {currentCityName, weatherData} = this.props;

        this.getTime();

        return (
            <div className={"weather_current"}>
                <div className="city_name"><p>{currentCityName} city</p><p>{currentCityName}</p></div>
                <div className="bottom_info">
                    <Time date={this.state.date}/>
                    <div className="temperature">
                        <span>{weatherData.main ? Math.floor(weatherData.main.temp) : null}</span><sup>°</sup> C
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherCurrent;
