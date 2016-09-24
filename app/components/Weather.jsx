var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <h3>Weather Component</h3>
                </div>
                <WeatherForm/>
                <WeatherMessage/>
            </div>
        );
    }
});

module.exports = Weather;