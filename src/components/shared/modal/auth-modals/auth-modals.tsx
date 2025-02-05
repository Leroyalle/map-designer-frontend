'use client';
import React from 'react';

import { Register, Login } from '../../forms';
import { Modal, ModalBody, ModalContent, Tab, Tabs } from '@heroui/react';

interface Props {
  open?: boolean;
  onClose?: (open: boolean) => void;
}

export const AuthModals: React.FC<Props> = ({ open = true, onClose }) => {
  return (
    <Modal size="lg" isOpen={open} placement="top-center" hideCloseButton onOpenChange={onClose}>
      <ModalContent className="py-4">
        <ModalBody>
          <Tabs fullWidth className="w-full" aria-label="auth actions">
            <Tab className="w-full" key="register" title="Зарегестрироваться">
              <Register />
            </Tab>

            <Tab className="w-full" key="login" title="Войти">
              <Login />
            </Tab>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
