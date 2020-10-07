import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { recipesSaga } from '@ducks/dishes/sagas';
import { rootReducer } from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const initialState = {};

const store = createStore(persistedReducer, initialState, enhancer);

sagaMiddleware.run(recipesSaga);

const persistor = persistStore(store);

export { store, persistor };
