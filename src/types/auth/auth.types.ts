export enum AuthTokensEnum {
  JWT = 'jwtToken',
}

export type RegisterType = LoginType & {
  name: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type VerifyUserType = {
  userId: string;
  code: string;
};

export type AuthResponse<T = void> = {
  message: string;
  isVerified: boolean;
  checkPassword: boolean;
} & T;
