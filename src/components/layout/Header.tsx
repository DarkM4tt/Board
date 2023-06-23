'use client';
import { ChangeEvent, useState } from 'react';

import { startCase } from 'lodash';
import { usePathname } from 'next/navigation';

import IcBell from '#assets/icons/bell.svg';
import Search from '#components/base/Search';

import styles from './header.module.scss';

export default function Header () {
	const pathname = usePathname();
	const [search, onSearch] = useState('');

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{startCase(pathname.substring(1))}</h1>
			<div className={styles.controls}>
				<Search value={search} onChange={onSearchChange} />
				<IcBell className={styles.notification} />
				<div className={styles.avatar} />
			</div>
		</header>
	);
}
