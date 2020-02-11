import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Signin from './components/pages/Signin'
import Dashboard from './components/pages/Dashboard'
import CreateAgent from './components/pages/CreateAgent'
import ViewAgent from './components/pages/ViewAgents'
import UpdateAgent from './components/pages/UpdateAgent'
import Error from './components/pages/Error'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Signin} />
      <Route exact path="/create" component={CreateAgent} />
      <Route exact path="/view" component={ViewAgent} />
      <Route exact path="/view/:agent_id" component={UpdateAgent} />
      <Route  component={Error} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
