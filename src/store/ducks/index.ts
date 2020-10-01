import { combineReducers } from 'redux';
import { RecipesState } from '@ducks/dishes/interfaces';
import dishReducer from './dishes/reducers';

type Store = {
  recipes: RecipesState,
};

export const rootReducer = combineReducers<Store>({
  recipes: dishReducer,
});
