import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import Footer from './Footer';
import Pokedex from './Pokedex';

function Layout() {
    return (
        <>
        <Router>
            <Nav/>
            <Switch>
                <Route path="/pokedex">
                    <Pokedex/>
                </Route>
                <Route path="/">
                    <Banner/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}

export default Layout;
