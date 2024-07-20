import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddVessel from './pages/AddVessel';
import VesselList from './pages/VesselList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-vessel" component={AddVessel} />
        <Route path="/vessel-list" component={VesselList} />
      </Switch>
    </Router>
  );
}

export default App;

