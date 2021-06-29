import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

const CustomRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/vaccine" exact component={Home} />
                    <Route path="/tracks" exact component={Home} />
                    <Route path="/attestation" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};

export default CustomRouter;