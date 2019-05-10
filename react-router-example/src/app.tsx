import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter, HashRouter, Redirect, Switch } from 'react-router-dom';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';
import NotFoundPage from 'pages/notFoundPage';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Page1} exact />
                    <Route path="/page2" component={Page2} exact />
                    <Route path="/page3" component={Page3} exact />
                    <Route path="/" component={NotFoundPage} />
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));