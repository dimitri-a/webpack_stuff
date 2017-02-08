import React from 'react';
import ReactDOM from 'react-dom';

/*
 * A simple React component
 */
class Application extends React.Component {
    render() {
        debugger
        console.log('testing ')
        return <div>
            <h1>gggg, ES6 w React 0.13!</h1>

        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementsByTagName("body")[0]);