import React, { useState } from 'react';
import { CodeForm, Register } from '..';

interface Props {
  onChangeTab: VoidFunction;
  className?: string;
}

export const RegisterActions: React.FC<Props> = ({ onChangeTab }) => {
  const [userId, setUserId] = useState<string>('');
  const [currentRegisterAction, setCurrentRegisterAction] = useState<'credentials' | 'code'>(
    'credentials',
  );

  const onSuccessSendEmail = (userId: string) => {
    setCurrentRegisterAction('code');
    setUserId(userId);
  };

  return (
    <>
      {currentRegisterAction === 'credentials' ? (
        <Register
          onSuccess={onSuccessSendEmail}
          onChangeAction={() => setCurrentRegisterAction('code')}
        />
      ) : (
        <CodeForm title="Введите код:" userId={userId} onChangeTab={onChangeTab} />
      )}
    </>
  );
};
