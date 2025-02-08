import { AppContext } from '@/components/shared/providers/root/context-provider';
import { useContext } from 'react';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};
