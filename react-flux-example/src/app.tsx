import * as React from 'react';
import * as ReactDOM from 'react-dom'
import Blog from 'components/blog';

class App extends React.Component {

    render() {
        return (
            <div>            <h1>Hello World</h1>
                <Blog />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));