import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home/Home'
import Results from '../pages/Results/Results'

const Routes = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/results">
                <Results />
            </Route>
        </Switch>
        </div>
    )
}

export default Routes
