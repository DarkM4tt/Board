'use client';

import { FC, SVGProps } from 'react';

import { signIn } from 'next-auth/react';

import IcApple from '#assets/icons/apple.svg';
import IcGoogle from '#assets/icons/google.svg';

import styles from './socialButton.module.scss';

export default function SocialButton (props: ISocialButtonProps) {
	const { service } = props;
	const label = service === 'google' ? 'Sign in with Google' : 'Sign in with Apple';
	const Icon: FC<SVGProps<SVGSVGElement>> = service === 'google' ? IcGoogle : IcApple;

	const onClick = () => {
		signIn(service);
	};

	return (
		<div className={styles.socialButton} onClick={onClick}>
			<Icon />
			<span>{label}</span>
		</div>
	);
}

interface ISocialButtonProps {
	service: 'google' | 'apple';
}
