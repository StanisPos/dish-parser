import produce from 'immer';
import { handleActions } from 'redux-actions';

export const immutableHandleActions = <T, U>(actions: any, initialState: U) =>
  handleActions<U, T>(
    Object.keys(actions).reduce((acc: any, key) => {
      acc[key] = produce(actions[key]);
      console.log(acc);
      return acc;
    }, {}),
    initialState,
  );
