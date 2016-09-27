var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <div>Here are a few example locations to try out</div>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;