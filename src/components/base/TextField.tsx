import { ChangeEvent } from 'react';

import styles from './textField.module.scss';

export default function TextField (props: ITextFieldProps) {
	const { label, value, type, onChange } = props;
	return (
		<div className={styles.textField}>
			<span className={styles.label}>{label}</span>
			<div className={styles.input}>
				<input type={type} value={value} onChange={onChange} />
			</div>
		</div>
	);
}

interface ITextFieldProps {
	type?: 'email' | 'password';
	label: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
