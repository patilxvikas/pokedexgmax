import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import Footer from './Footer';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
function Layout() {
    return (
        <>
        <Router>
            <Switch>
                <Route path="/pokemon/:pokeid">
                    <Pokemon />
                </Route>
                <Route path="/">
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
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Layout;
