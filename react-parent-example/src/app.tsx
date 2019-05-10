import * as React from 'react';
import * as ReactDOM from 'react-dom'
import TestParent from './components/testParent';
import TestComponent from './components/testComponent';

class App extends React.Component {

    render() {
        return (
            <TestParent>
                <TestComponent />
            </TestParent>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));