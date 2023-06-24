import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
