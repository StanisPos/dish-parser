import React from 'react';
import Form from '@components/Form';

export const Phone = React.memo(() => (
  <Form
    fieldType="phone"
    bottomLinkTitle="Вход с помощью e-mail"
    bottomLinkUrl="/login/email/"
    buttonTitle="Продолжить"
    inputPlaceholder="Телефон"
    formHasBackButton={false}
    submitButtonUrl="/login/password/"
  />
));
