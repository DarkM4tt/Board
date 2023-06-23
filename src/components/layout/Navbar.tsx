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
			<ul className={styles.navLinks}>
				{
					routes.map((route, i) => {
						const Icon = route.Icon;
						return (
							<li className={styles.navLink} key={`${route.name}-${i}`}>
								<Icon />
								<Link className={clsx(route.path === pathname && styles.active)} href={route.path}>
									{route.name}
								</Link>
							</li>
						);
					})
				}
			</ul>
			<ul className={styles.externalLinks}>
				{
					externalLinks.map((route, i) => {
						return (
							<li className={styles.navLink} key={`${route.name}-${i}`}>
								<Link className={clsx(route.path === pathname && styles.active)} href={route.path}>
									{route.name}
								</Link>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}

interface INavbarProps {
	appName?: string;
}
