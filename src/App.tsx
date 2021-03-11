import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/countries/:code">
          <CountryDetailsPage />
        </Route>
        <Route path="/countries">
          <CountriesPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
