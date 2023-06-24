import { ReactNode } from 'react';

import clsx from 'clsx';
import { getServerSession } from 'next-auth';

import { authOptions } from '#api/auth/[...nextauth]/route';
import { lato, montserrat, openSans } from '#utils/fontHelper';

import './globals.scss';

export const metadata = {
	title: 'Board',
	description: 'A Dashboard created using NextJs 13',
};

export default async function RootLayout (props: IRootProps) {
	const { children } = props;
	const session = await getServerSession(authOptions);
	console.log(session);
	return (
		<html lang='en'>
			<body className={clsx(lato.variable, montserrat.variable, openSans.variable)} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
