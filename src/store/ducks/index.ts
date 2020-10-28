import { combineReducers } from 'redux';
import { RecipesState } from '@ducks/dishes/interfaces';
import dishReducer from './dishes/reducers';
import authReducer from './auth/reducer';

type Store = {
  recipes: RecipesState;
  auth: any;
};

export const rootReducer = combineReducers<Store>({
  recipes: dishReducer,
  auth: authReducer,
});
