import React, {Component} from 'react';
import '../src/assets/styles/main.css';
import WeatherContainer from "./containers/WeatherContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <WeatherContainer/>
            </div>
        );
    }
}

export default App;
