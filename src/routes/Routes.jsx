import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Quotes from '../pages/Quotes';
import Home from '../pages/Home';
import '../assets/pages/darkTheme.css'
const Routes = () =>(
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/author/:name" component={Quotes}/>
    </BrowserRouter>
)

export default Routes