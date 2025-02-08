import { queryOptions } from '@tanstack/react-query';
import { userService } from './user-api';

export const getProfileQueryOptions = () => {
  return queryOptions({
    queryKey: ['profile'],
    queryFn: userService.getProfile,
    staleTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
