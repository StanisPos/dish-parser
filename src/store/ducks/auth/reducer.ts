import { Draft } from 'immer';
import { Action } from 'redux-actions';
import { isEmpty, noop } from 'lodash';
import { immutableHandleActions } from '@ducks/utils';
import * as actions from './actions';

const INITIAL_STATE: any = {
  name: '',
  phone: '',
  email: '',
};

const reducer = {
  [actions.changeField.toString()]: (draft: Draft<any>, { payload }: Action<any>) => {
    draft[payload.fieldType] = payload.value;
  },
};

export default immutableHandleActions<typeof reducer, any>(reducer, INITIAL_STATE);
