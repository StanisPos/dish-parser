import { createAction } from 'redux-actions';
import { SignIn, SignUp } from '@ducks/auth/interfaces';

const prefix = 'Users';

export const signUp = createAction<SignUp>(`${prefix}/signup`);
export const signIn = createAction<SignIn>(`${prefix}/signin`);
export const changeField = createAction<any>(`${prefix}/change-field`);
