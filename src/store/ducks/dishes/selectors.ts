import { createSelector } from 'reselect';

import { selectData } from '@ducks/utils';
import { RecipesState } from './interfaces';

const selectDomain = selectData<RecipesState>('recipes');

export const selectRecipes = createSelector(selectDomain, state => state.recipes);
