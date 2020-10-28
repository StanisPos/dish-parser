import { takeLatest } from 'redux-saga/effects';
import * as actions from '@ducks/auth/actions';
import { Auth } from '@services/api/auth';

// function* signUp(userData: any) {
//   const data = yield Auth.signUp(userData);
// }

function* signIn(userData: any) {
  const data = yield Auth.signIn(userData);
  console.log(data);
}

export function* authSaga() {
  yield takeLatest(actions.signIn, signIn);
}
