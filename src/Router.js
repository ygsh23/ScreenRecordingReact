import React from 'react';
import { Route, Switch, BrowserRouter, } from 'react-router-dom';
// import ScreenRecord from './ScreenRecording';
import ScreenRecorder from './ScreenRecorder';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={ScreenRecorder}/>
        <Route path="/screenrecording" component={ScreenRecorder}/>
    </Switch>
    </BrowserRouter>
);

export default Router;