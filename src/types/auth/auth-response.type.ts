export type SuccessAuthResponse<T = void> = {
  message: string;
  isVerified: boolean;
  checkPassword: boolean;
} & T;
