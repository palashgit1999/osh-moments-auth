export class LoginModel {
  ['mailto:email']: string;
  password: string;
}

export interface LoginResponseModel {
  id: string;
  user: string;
  email: string;
  loginTime: Date;
}
