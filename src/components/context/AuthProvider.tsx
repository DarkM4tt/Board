'use client';

import { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider (props: IAuthProviderProps) {
	const { children } = props;
	return (
		<SessionProvider>{children}</SessionProvider>
	);
}

interface IAuthProviderProps {
	children?: ReactNode;
}
