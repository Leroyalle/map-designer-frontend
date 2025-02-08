import { infiniteQueryOptions } from '@tanstack/react-query';
import { projectService } from './project-api';

export const getAllProjectsInfiniteQueryOptions = () => {
  return infiniteQueryOptions({
    queryKey: ['projects'],
    queryFn: ({ pageParam }) => projectService.getAll(pageParam, 10),
    initialPageParam: 1,
    staleTime: 1 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    select: ({ pages }) => pages.flatMap((page) => page),
    refetchOnWindowFocus: false,
  });
};
