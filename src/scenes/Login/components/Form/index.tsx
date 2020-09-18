import React from 'react';
import { Input } from '../../../../components/Input';

const Form = () => {
	return (
		<div className="login-form">
			<Input required id="email" type="email" label="E-mail" />
		</div>
	);
};

export default Form;
