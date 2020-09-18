import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './scenes/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
