import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_CLIENT_ID),
			clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
		}),
	],
	callbacks: {
		async signIn () {
			return true;
		},
	},
};
