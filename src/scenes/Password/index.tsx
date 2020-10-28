import React from 'react';
import Form from '@components/Form';

export const Password = React.memo(() => (
  <Form
    fieldType="password"
    buttonTitle="Войти"
    inputPlaceholder="Пароль"
    formHasBackButton
    submitButtonUrl="/recipes/"
  />
));
