import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Dishes } from '@services/api/dishes';
import Login from './scenes/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './layout/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Container>
            <Login />
          </Container>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
