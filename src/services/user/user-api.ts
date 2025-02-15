import { $fetch } from '../fetch-wrapper';
import { ApiRoutesEnum, User } from '@/types';

class UserService {
  public async getProfile() {
    return $fetch.get<User>(ApiRoutesEnum.PROFILE, true);
  }
}

export const userService = new UserService();
