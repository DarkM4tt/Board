'use client';

import { usePathname } from 'next/navigation';

import { externalLinks, routes } from '#data/constant';

export default function Content () {
	const pathname = usePathname();
	const Component = [...routes, ...externalLinks].find((route) => route.path === pathname)?.View;

	if (!Component) return null;

	return (
		<>
			<Component />
		</>
	);
}
