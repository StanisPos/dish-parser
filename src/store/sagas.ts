import { authSaga } from '@ducks/auth/sagas';
import { recipesSaga } from '@ducks/dishes/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), recipesSaga()]);
}
