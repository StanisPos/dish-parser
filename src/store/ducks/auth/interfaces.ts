export interface SignIn {
  email?: string;
  phone?: string;
  password: string;
}

export interface SignUp extends SignIn {
  name: string;
}
