import { Draft } from 'immer';
import { Action } from 'redux-actions';
import { isEmpty, noop } from 'lodash';
import { immutableHandleActions } from '@ducks/utils';

import * as actions from './actions';
import { Dish, RecipesState } from './interfaces';

const INITIAL_STATE: RecipesState = {
  recipes: [],
  count: 0,
};

const reducer = {
  [actions.requestRecipesSuccess.toString()]: (
    draft: Draft<RecipesState>,
    { payload }: Action<Dish[]>,
  ) => {
    draft.recipes = payload;
    draft.count = payload.length;
  },
  [actions.addRecipe.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    if (!isEmpty(payload)) {
      draft.recipes.push(payload);
      draft.count = ++draft.count;
    }
  },
  [actions.deleteRecipe.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    draft.recipes = draft.recipes.filter(({ id }: Dish) => id !== payload.id);
  },
  [actions.updateRecipe.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    noop();
  },
  [actions.sortRecipes.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    noop();
  },
  [actions.resetSortRecipes.toString()]: (
    draft: Draft<RecipesState>,
    { payload }: Action<Dish>,
  ) => {
    noop();
  },
};

export default immutableHandleActions<typeof reducer, RecipesState>(reducer, INITIAL_STATE);
