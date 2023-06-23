import { ReactNode } from 'react';

import clsx from 'clsx';

import { lato, montserrat } from '#utils/fontHelper';

import './globals.scss';

export const metadata = {
	title: 'Board',
	description: 'A Dashboard created using NextJs 13',
};

export default function RootLayout (props: IRootProps) {
	const { children } = props;
	return (
		<html lang='en'>
			<body className={clsx(lato.variable, montserrat.variable)} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
