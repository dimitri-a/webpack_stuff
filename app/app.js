import React from 'react';
import {render} from 'react-dom'


class Application extends React.Component {
    render() {
        return <div>
            <h1>Hello, ES6 and React 0.13!</h1>
            <p>

            </p>
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));