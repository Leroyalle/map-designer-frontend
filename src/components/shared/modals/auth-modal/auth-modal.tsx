'use client';
import React, { useState } from 'react';
import { Login, RegisterActions } from '../../forms';
import { Modal, ModalBody, ModalContent, Tab, Tabs } from '@heroui/react';

interface Props {
  open?: boolean;
  onClose?: (open: boolean) => void;
}

export const AuthModal: React.FC<Props> = ({ open = true, onClose }) => {
  const [selectedTab, setSelectedTab] = useState<string | number>('register');
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
