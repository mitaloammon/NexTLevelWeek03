import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanageMap from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Landing} />
                <Route  path="/app" component={OrphanageMap} />

                <Route  path="/orphanages/create" component={CreateOrphanageMap} />
                <Route  path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 