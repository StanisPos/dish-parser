import { createAction } from 'redux-actions';

const prefix = 'DISH';

export const addDish = createAction<any>(`${prefix}/add`);
export const updateDish = createAction<any>(`${prefix}/update`);
export const deleteDish = createAction<any>(`${prefix}/delete`);

export const sortDish = createAction<any>(`${prefix}/sort`);
export const resetSortDish = createAction<any>(`${prefix}/reset-sort`);
