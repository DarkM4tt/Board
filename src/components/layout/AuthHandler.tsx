'use client';

import { useEffect } from 'react';

import { getServerSession } from 'next-auth/next';

import { authOptions } from '#api/auth/[...nextauth]/route';

export async function getServerSideProps (context) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions,
	);

	if (session) {
		return {
			redirect: {
				destination: '/dashboard',
				permanent: true,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}

export default function AuthHandler () {
	return null;
}
