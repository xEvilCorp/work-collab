import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from './pages/signup';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/signup" component={Signup} />
        </BrowserRouter>
    );
}