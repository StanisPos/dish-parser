import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Dishes } from '@services/api/dishes';
import Login from './scenes/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  Dishes.getList()
    .then(e => {
      console.log(e);
    })
    .catch(err => {
      console.log(err);
    });
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
