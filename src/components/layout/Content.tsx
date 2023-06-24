'use client';

import { useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { externalLinks, mainRoutes } from '#data/routes';

import Header from './Header';
import styles from './content.module.scss';

export default async function Content () {
	const pathname = usePathname();
	const router = useRouter();
	const activeRoute = [...mainRoutes, ...externalLinks].find((route) => route.path === pathname);
	const Component = activeRoute?.View;

	useEffect(() => {
		if (!Component)
			router.replace(mainRoutes[0]?.path);
	}, [Component, router]);

	if (!Component) return null;

	return (
		<div className={styles.content}>
			<Header />
			<Component />
		</div>
	);
}
