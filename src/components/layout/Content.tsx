'use client';

import { usePathname, useRouter } from 'next/navigation';

import { externalLinks, mainRoutes } from '#data/routes';

import Header from './Header';
import styles from './content.module.scss';

export default function Content () {
	const pathname = usePathname();
	const router = useRouter();
	const Component = [...mainRoutes, ...externalLinks].find((route) => route.path === pathname)?.View;

	if (!Component) {
		router.replace(mainRoutes[0]?.path);
		return null;
	}

	return (
		<div className={styles.content}>
			<Header />
			<Component />
		</div>
	);
}
