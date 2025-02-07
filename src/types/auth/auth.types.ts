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

export enum AuthTokensEnum {
  JWT = 'jwtToken',
}
