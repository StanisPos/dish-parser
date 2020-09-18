import React from 'react';
import styled from 'styled-components';

type Props = {
	type: string,
	id: string,
	required: boolean,
	label?: string,
};

const StyledInput = styled.input`
	width: 100%;
	font-size: 14px;
	line-height: 17px;
	font-style: normal;
	font-weight: normal;
	padding: 16px 24px;
`;

export const Input: React.FC<Props> = React.memo(({ type, id, required, label }) => {
	return (
		<div>
			<StyledInput id={id} type={type} required={required} />
			{label && <label htmlFor={id}>{label}</label>}
		</div>
	);
});
