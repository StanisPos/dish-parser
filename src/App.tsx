import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from './layout/Container';
import { Login } from './scenes/Phone';
import { Password } from './scenes/Password';
import { Email } from './scenes/Email';
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
              <Route path="/login/email/" component={Email} />
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
