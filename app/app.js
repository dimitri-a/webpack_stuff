import React from 'react';
import ReactDOM from 'react-dom';

/*
 * A simple React component
 */
class Application extends React.Component {
    render() {
        //debugger
        console.log('hi there')
        return <div>
            <h1>hello world</h1>
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('root'));