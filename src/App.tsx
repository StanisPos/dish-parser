import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from './layout/Container';
import { Login } from './scenes/Login';
import { Password } from './scenes/Password';
import { Recipes } from './scenes/Recipes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Container>
            <Switch>
              <Route path="/login/" exact component={Login} />
              <Route path="/login/password/" component={Password} />
              <Route path="/recipes/" component={Recipes} />
              <Redirect to="/login/" />
            </Switch>
          </Container>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
