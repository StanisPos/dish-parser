import { api } from '@services/api';
import bcrypt from 'bcrypt';
import { SignIn, SignUp } from '@ducks/auth/interfaces';

export class Auth {
  private static signUpUrl = '/auth/signup';
  private static signInUrl = '/auth/signin';

  private static salt = 11;

  static token = '';

  private static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt
        .hash(password, Auth.salt)
        .then(encrypted => resolve(encrypted))
        .catch(err => reject(err));
    });
  }

  static async signUp({ password, ...userData }: SignUp): Promise<any> {
    const encryptedPassword = await Auth.hashPassword(password);
    const data = await api.post(
      Auth.signUpUrl,
      JSON.stringify({ ...userData, password: encryptedPassword }),
    );
    return data;
  }

  static async signIn({ password, ...userData }: SignIn): Promise<any> {
    const encryptedPassword = await Auth.hashPassword(password);
    const data = await api.post(
      Auth.signInUrl,
      JSON.stringify({ ...userData, password: encryptedPassword }),
    );
    return data;
  }
}
