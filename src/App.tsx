import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './scenes/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './layout/Container';
import { Recipes } from './scenes/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Container>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/recipes" component={Recipes} />
              <Redirect to="login" />
            </Switch>
          </Container>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
