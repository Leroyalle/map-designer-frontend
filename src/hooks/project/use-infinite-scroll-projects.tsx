'use client';
import { getAllProjectsInfiniteQueryOptions } from '@/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScrollProjects = () => {
  const { ref, inView } = useInView();
  const { data, isPending, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    getAllProjectsInfiniteQueryOptions(),
  );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const cursor = <div ref={ref} className="h-1 w-full bg-transparent" />;

  return { data, isPending, isError, isFetchingNextPage, cursor };
};
