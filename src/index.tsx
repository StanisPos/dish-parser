import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'react-bootstrap';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={<Spinner animation="grow" variant="success" />}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
