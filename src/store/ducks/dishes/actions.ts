import { createAction } from 'redux-actions';
import { Dish } from '@ducks/dishes/interfaces';

const prefix = 'DISH';

export const addDish = createAction<Dish>(`${prefix}/add`);
export const updateDish = createAction<Dish>(`${prefix}/update`);
export const deleteDish = createAction<Dish>(`${prefix}/delete`);

export const sortDish = createAction<string>(`${prefix}/sort`);
export const resetSortDish = createAction<void>(`${prefix}/reset-sort`);
