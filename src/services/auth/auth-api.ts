import {
  ApiRoutesEnum,
  LoginType,
  RegisterType,
  SuccessAuthResponse,
  VerifyUserType,
} from '@/types';
import { $fetch } from '../ferch-wrapper';

class AuthService {
  public async register(body: RegisterType, isAuth: boolean = false) {
    return await $fetch.post<SuccessAuthResponse<{ userId: string }>>(
      ApiRoutesEnum.REGISTER,
      body,
      isAuth,
    );
  }

  public async login(body: LoginType, isAuth: boolean = false) {
    return await $fetch.post<SuccessAuthResponse<{ token: string }>>(
      ApiRoutesEnum.LOGIN,
      body,
      isAuth,
    );
  }

  public async verifyUser(body: VerifyUserType, isAuth: boolean = false) {
    return await $fetch.post<SuccessAuthResponse>(ApiRoutesEnum.VERIFY_USER, body, isAuth);
  }
}

export const authService = new AuthService();
