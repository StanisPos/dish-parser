import { createSelector } from 'reselect';
import produce from 'immer';
import { handleActions } from 'redux-actions';

export const immutableHandleActions = <T, U>(actions: any, initialState: U) =>
  handleActions<U, T>(
    Object.keys(actions).reduce((acc: any, key) => {
      acc[key] = produce(actions[key]);

      return acc;
    }, {}),
    initialState,
  );

export const selectData = <T>(resource: string) =>
  createSelector<any, T, any>(
    state => state[resource],
    data => data,
  );
