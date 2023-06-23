'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IRoute, externalLinks, mainRoutes } from '#data/routes';

import styles from './navbar.module.scss';

const NavItem = (props: INavItemProps) => {
	const { route } = props;
	const pathname = usePathname();
	const Icon = route?.Icon;

	return (
		<Link

			className={clsx(styles.navLink, route.path === pathname && styles.active)}
			href={route.path}
		>
			{Icon && <Icon />}
			<span>{route.name}</span>
		</Link>
	);
};
export default function Navbar (props: INavbarProps) {
	const { appName } = props;

	return (
		<div className={styles.navbar}>
			<div className={styles.brand}>{appName}.</div>
			<div className={styles.navLinks}>
				{
					mainRoutes.map((route, i) => (
						<NavItem key={`${route.name}-${i}`} route={route} />
					))
				}
			</div>
			<div className={styles.externalLinks}>
				{
					externalLinks.map((route, i) => (
						<NavItem key={`${route.name}-${i}`} route={route} />
					))
				}
			</div>
		</div>
	);
}

interface INavbarProps {
	appName?: string;
}

interface INavItemProps {
	route: IRoute;
}
