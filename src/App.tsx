import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/countries">
          <CountriesPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
