'use client';

import { usePathname } from 'next/navigation';

import { externalLinks, mainRoutes } from '#data/routes';

export default function Content () {
	const pathname = usePathname();
	const Component = [...mainRoutes, ...externalLinks].find((route) => route.path === pathname)?.View;

	if (!Component) return null;

	return <Component />;
}
