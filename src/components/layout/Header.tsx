'use client';

import { ChangeEvent, useState } from 'react';

import { startCase } from 'lodash';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import IcBell from '#assets/icons/bell.svg';
import Search from '#components/base/Search';
import Spinner from '#components/base/Spinner';

import styles from './header.module.scss';

export default function Header () {
	const pathname = usePathname();
	const [search, onSearch] = useState('');
	const { data: session } = useSession();
	const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{pathname != '/logout' ? startCase(pathname.substring(1)) : ''}</h1>
			<div className={styles.controls}>
				<Search value={search} onChange={onSearchChange} />
				<IcBell className={styles.notification} />
				<div className={styles.avatar}>
					{
						session?.user?.image
							? <Image src={session?.user?.image ?? ''} alt='avatar' fill />
							: <Spinner />
					}
				</div>
			</div>
		</header>
	);
}
