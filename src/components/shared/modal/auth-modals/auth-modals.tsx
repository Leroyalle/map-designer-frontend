'use client';
import React from 'react';

import { Register } from '../../forms';
import { Modal, ModalBody, ModalContent } from '@heroui/react';

interface Props {
  open?: boolean;
  onClose?: (open: boolean) => void;
}

export const AuthModals: React.FC<Props> = ({ open = true, onClose }) => {
  return (
    <Modal size="lg" isOpen={open} placement="top-center" hideCloseButton onOpenChange={onClose}>
      <ModalContent className="py-4">
        <ModalBody>
          <Register />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
