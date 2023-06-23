'use client';

import { ChangeEvent, useState } from 'react';

import TextField from '#components/base/TextField';

import styles from './passwordLogin.module.scss';

export default function PasswordLogin () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event?.target?.value);
	};
	const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event?.target?.value);
	};

	return (
		<div className={styles.passwordLogin}>
			<TextField label='Email address' type='email' value={email} onChange={onEmailChange} />
			<TextField label='Password' type='password' value={password} onChange={onPasswordChange} />
			<span className={styles.forgot}>Forgot password?</span>
			<div className={styles.signIn}>Sign In</div>
		</div>
	);
}
