import { takeLatest, put } from 'redux-saga/effects';
import { Recipe } from '@services/api/recipes';
import * as actions from './actions';

function* requestAllRecipes() {
  try {
    const { data } = yield Recipe.getList();

    yield put(actions.requestRecipesSuccess(data));
  } catch (err) {
    yield put(actions.requestRecipesFail());
  }
}

export function* recipesSaga() {
  yield takeLatest(actions.requestRecipes, requestAllRecipes);
}
