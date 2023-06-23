import { ReactNode } from 'react';

import { montserrat } from '#utils/fontHelper';

import './globals.scss';

export const metadata = {
	title: 'Board',
	description: 'A Dashboard created using NextJs 13',
};

export default function RootLayout (props: IRootProps) {
	const { children } = props;
	return (
		<html lang='en'>
			<body className={montserrat.variable} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
