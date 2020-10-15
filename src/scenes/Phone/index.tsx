import React from 'react';
import { Form } from '@components/Form';

export const Login = React.memo(() => (
  <Form
    fieldType="phone"
    bottomLinkTitle="Вход с помощью e-mail"
    buttonTitle="Продолжить"
    inputPlaceholder="Телефон"
    formHasBackButton={false}
  />
));
