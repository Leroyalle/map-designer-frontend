'use client';
import React, { useEffect, useState } from 'react';
import { Login, RegisterActions } from '../../forms';
import { Modal, ModalBody, ModalContent, Tab, Tabs } from '@heroui/react';
import { useQueryClient } from '@tanstack/react-query';
import { AuthTokensEnum } from '@/types';
import Cookies from 'js-cookie';

interface Props {
  open?: boolean;
  onClose?: (open: boolean) => void;
}

export const AuthModal: React.FC<Props> = ({ open = true, onClose }) => {
  const [selectedTab, setSelectedTab] = useState<string | number>('register');

  const queryClient = useQueryClient();

  useEffect(() => {
    Cookies.remove(AuthTokensEnum.JWT);
    queryClient.removeQueries();
  }, []);

  return (
    <Modal size="lg" isOpen={open} placement="center" hideCloseButton onOpenChange={onClose}>
      <ModalContent className="py-4 max-h-[90vh] overflow-y-auto scrollbar">
        <ModalBody>
          <Tabs
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key)}
            fullWidth
            aria-label="auth actions">
            <Tab key="register" title="Зарегестрироваться">
              <RegisterActions onChangeTab={() => setSelectedTab('login')} />
            </Tab>
            <Tab key="login" title="Войти">
              <Login />
            </Tab>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
