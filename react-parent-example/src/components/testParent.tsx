import * as React from 'react';

class TestParent extends React.Component {

    render() {
        return <div style={{ background: '#F00' }}>
            {this.props.children}
        </div>
    }
}
export default TestParent;