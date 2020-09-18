import { handleActions, ReducerMapMeta } from 'redux-actions';
import * as actions from './actions';
import { setAddDishes } from './helpers';

const INITIAL_STATE = {
	dishes: [],
	count: 0,
};

const reducer: ReducerMapMeta<any, any, any> = {
	[actions.addDish.toString()]: (state: any, { payload }: any) => ({
		...state,
		...setAddDishes(state, payload),
	}),
	[actions.deleteDish.toString()]: (state: any, { payload }: any) => ({
		...state,
		dishes: state.dishes.filter(({ id }: any) => id !== payload.id),
	}),
	[actions.updateDish.toString()]: (state, { payload }) => ({ ...state }),
	[actions.sortDish.toString()]: (state, { payload }) => ({ ...state }),
	[actions.resetSortDish.toString()]: (state, { payload }) => ({ ...state }),
};

export default handleActions(reducer, INITIAL_STATE);
