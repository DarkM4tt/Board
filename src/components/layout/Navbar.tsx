'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import IcDashboard from '#assets/icons/dashboard.svg';
import IcSchedules from '#assets/icons/schedule.svg';
import IcSettings from '#assets/icons/setting.svg';
import IcTransactions from '#assets/icons/transaction.svg';
import IcUsers from '#assets/icons/user.svg';

import styles from './navbar.module.scss';

const routes = [
	{ name: 'Dashboard', path: '/dashboard', Icon: IcDashboard },
	{ name: 'Transactions', path: '/transactions', Icon: IcTransactions },
	{ name: 'Schedules', path: '/schedules', Icon: IcSchedules },
	{ name: 'Users', path: '/users', Icon: IcUsers },
	{ name: 'Settings', path: '/settings', Icon: IcSettings },
];

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
							<li key={`${route.name}-${i}`}>
								<Icon />
								<Link
									className={clsx(styles.navLink, route.path === pathname && styles.active)}
									href={route.path}
								>
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
