import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Vaccine from '../pages/Vaccine';
import Track from '../pages/Track';

const CustomRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/vaccine" exact component={Vaccine} />
                    <Route path="/track" exact component={Track} />
                    <Route path="/attestation" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};

export default CustomRouter;