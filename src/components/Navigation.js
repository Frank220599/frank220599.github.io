import React, {Component} from 'react'
import Button from "./Button";

class Navigation extends Component {

    state = {
        isActive: false
    };


    defineClass = () => this.state.isActive ? "active" : "notActive";

    showNavigation = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    };

    render() {

        const {getCityWeather, currentCityId, cities} = this.props;

        return (
            <div className={`navigation ${this.defineClass()}`}>
                <Button onClick={this.showNavigation}/>
                <ul>
                    {
                        cities.map(city => (
                            <li
                                className={city.id === currentCityId ? 'active' : null}
                                key={city.id}
                                onClick={() => getCityWeather(city.id, city.title)}
                            >{city.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Navigation;