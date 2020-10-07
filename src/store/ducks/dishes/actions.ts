import { createAction } from 'redux-actions';
import { Dish } from '@ducks/dishes/interfaces';

const prefix = 'Recipes';

export const requestRecipes = createAction(`${prefix}/request`);
export const requestRecipesSuccess = createAction(`${prefix}/request/success`);
export const requestRecipesFail = createAction(`${prefix}/request/fail`);

export const addRecipe = createAction<Dish>(`${prefix}/add`);
export const updateRecipe = createAction<Dish>(`${prefix}/update`);
export const deleteRecipe = createAction<Dish>(`${prefix}/delete`);

export const sortRecipes = createAction<string>(`${prefix}/sort`);
export const resetSortRecipes = createAction<void>(`${prefix}/reset-sort`);
