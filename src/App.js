import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonContainer from './components/person';
import PageNotFound from "./components/pageNotFound/pageNotFound";

const App = () => (
    <div style={{background: 'gray', padding: '50px'}}>
        <Router>
            <Switch>
                <Route  component={PersonContainer} />
                {/*<Route component={PageNotFound}/>*/}
            </Switch>
        </Router>
    </div>
);

export default App;
