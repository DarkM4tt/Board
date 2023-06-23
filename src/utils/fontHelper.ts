import { Lato, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
	weight: ['200', '300', '400', '500', '700'],
	fallback: ['sans-serif', 'system-ui'],
	subsets: ['latin'],
	variable: '--montserrat',
});

export const lato = Lato({
	weight: ['400'],
	fallback: ['sans-serif', 'system-ui'],
	subsets: ['latin'],
	variable: '--lato',
});
