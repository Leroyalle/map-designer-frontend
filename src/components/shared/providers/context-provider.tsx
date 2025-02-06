'use client';
import { createContext, ReactNode, useState } from 'react';

type AppContextType = {
  isOpen: boolean;
  onChange: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isOpen, onChange: () => setIsOpen(!isOpen) }}>
      {children}
    </AppContext.Provider>
  );
};
