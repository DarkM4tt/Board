import { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import Spinner from '#components/base/Spinner';

import styles from './logout.module.scss';

export default function Logout () {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === '/logout') {
			signOut();
		}
	}, [pathname]);

	return (
		<div className={styles.logout}>
			<Spinner />
		</div>
	);
}
