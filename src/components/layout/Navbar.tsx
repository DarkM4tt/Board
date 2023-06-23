'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { externalLinks, routes } from '#data/constant';

import styles from './navbar.module.scss';

export default function Navbar (props: INavbarProps) {
	const { appName } = props;
	const pathname = usePathname();

	return (
		<div className={styles.navbar}>
			<div className={styles.brand}>{appName}.</div>
			<div className={styles.navLinks}>
				{
					routes.map((route, i) => {
						const Icon = route?.Icon;
						return (
							<Link
								key={`${route.name}-${i}`}
								className={clsx(styles.navLink, route.path === pathname && styles.active)}
								href={route.path}
							>
								{Icon && <Icon />}
								{route.name}
							</Link>
						);
					})
				}
			</div>
			<div className={styles.externalLinks}>
				{
					externalLinks.map((route, i) => (
						<Link
							key={`${route.name}-${i}`}
							className={clsx(styles.navLink, route.path === pathname && styles.active)}
							href={route.path}
						>
							{route.name}
						</Link>
					))
				}
			</div>
		</div>
	);
}

interface INavbarProps {
	appName?: string;
}
