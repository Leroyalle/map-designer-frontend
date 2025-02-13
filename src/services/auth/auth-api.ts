import { ApiRoutesEnum, LoginType, RegisterType, AuthResponse, VerifyUserType } from '@/types';
import { $fetch } from '../fetch-wrapper';

class AuthService {
  public async register(body: RegisterType, isAuth: boolean = false) {
    return await $fetch.post<AuthResponse<{ userId: string }>>(
      ApiRoutesEnum.REGISTER,
      body,
      isAuth,
    );
  }

  public async login(body: LoginType, isAuth: boolean = false) {
    return await $fetch.post<AuthResponse<{ token: string }>>(ApiRoutesEnum.LOGIN, body, isAuth);
  }

  public async verifyUser(body: VerifyUserType, isAuth: boolean = false) {
    return await $fetch.post<AuthResponse>(ApiRoutesEnum.VERIFY_USER, body, isAuth);
  }
}

export const authService = new AuthService();
