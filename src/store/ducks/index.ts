import { combineReducers } from 'redux';
import dishReducer from './dishes/reducers';

type Store = {
	dishes: any,
};

export const rootReducer = combineReducers<Store>({
	dishes: dishReducer,
});
