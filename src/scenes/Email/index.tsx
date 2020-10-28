import React from 'react';
import Form from '@components/Form';

export const Email = React.memo(() => (
  <Form
    fieldType="email"
    bottomLinkTitle="Вход с помощью телефона"
    bottomLinkUrl="/login/"
    buttonTitle="Продолжить"
    inputPlaceholder="E-mail"
    formHasBackButton={false}
    submitButtonUrl="/login/password/"
  />
));
