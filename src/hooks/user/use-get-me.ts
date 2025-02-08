'use client';
import { getProfileQueryOptions } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useGetMe = () => {
  return useQuery(getProfileQueryOptions());
};
