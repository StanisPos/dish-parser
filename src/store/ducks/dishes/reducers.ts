import { Draft } from 'immer';
import { Action } from 'redux-actions';
import { isEmpty, noop } from 'lodash';
import { immutableHandleActions } from '@ducks/utils';

import * as actions from './actions';
import { Dish, RecipesState } from './interfaces';

const INITIAL_STATE: RecipesState = {
  dishes: [],
  count: 0,
};

const reducer = {
  [actions.addDish.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    if (!isEmpty(payload)) {
      draft.dishes.push(payload);
      draft.count = ++draft.count;
    }
  },
  [actions.deleteDish.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    draft.dishes = draft.dishes.filter(({ id }: Dish) => id !== payload.id);
  },
  [actions.updateDish.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    noop();
  },
  [actions.sortDish.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    noop();
  },
  [actions.resetSortDish.toString()]: (draft: Draft<RecipesState>, { payload }: Action<Dish>) => {
    noop();
  },
};

export default immutableHandleActions<typeof reducer, RecipesState>(reducer, INITIAL_STATE);
