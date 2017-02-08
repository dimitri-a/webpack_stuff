import React from 'react';
import ReactDOM from 'react-dom';

/*
 * A simple React component
 */
class Applications extends React.Component {
    render() {
        console.log('testing ')
        return <div>
            <h1>Hello, ES6 w React 0.13!</h1>

        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('root'));