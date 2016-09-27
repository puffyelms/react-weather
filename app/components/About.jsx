var React = require('react');

var About = (props) => {
    return (
    <div>
        <h1 className="text-center">About</h1>
        <div>This is a weather application built on React.  I have built this for the Complete Web App Developer Course.</div>
        <div>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
               </li>
            </ol>
        </div>
    </div>
    )
};

module.exports = About;