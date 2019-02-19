import React, {Component, Fragment} from 'react'
import Navigation from "../components/Navigation";
import WeatherInfo from "../components/WeatherInfo";
import WeatherCurrent from "../components/WeatherCurrent";
import {connect} from "react-redux";
import {getCurrentWeather} from '../actions/actions'
import cities from '../api/cities'
import Preloader from "../components/Preloader";

class WeatherContainer extends Component {


    componentDidMount() {
        const {getCityWeather, currentCityId, currentCityName} = this.props;
        getCityWeather(currentCityId, currentCityName);
    }


    render() {

        const {getCityWeather, currentCityId, weatherData, isLoading, currentCityName, otherDaysData} = this.props;

        return (
            <div className={"container"}>
                <Navigation
                    cities={cities}
                    getCityWeather={getCityWeather}
                    currentCityId={currentCityId}
                />
                {
                    isLoading
                        ? <Preloader/>
                        : <Fragment>
                            <WeatherCurrent
                                weatherData={weatherData}
                                currentCityName={currentCityName}
                            />
                            <WeatherInfo
                                otherDaysData={otherDaysData}
                            />
                        </Fragment>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        currentCityId: state.currentCityId,
        currentCityName: state.currentCityName,
        weatherData: state.data,
        otherDaysData: state.otherDaysData
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getCityWeather: (cityId, cityName) => dispatch(getCurrentWeather(cityId, cityName)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);

