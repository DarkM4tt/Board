'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import IcArrow from '#assets/icons/arrowDown.svg';
import Spinner from '#components/base/Spinner';

import styles from './activities.module.scss';

const ActivityChart = dynamic(() => import('./ActivityChart'), { ssr: false });
export default function Activities () {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('/api/getActivities').then((res) => res.json()).then((data) => setData(data));
	}, []);

	return (
		<div className={styles.activities}>
			<div className={styles.header}>
				<span className={styles.title}>Activities</span>
				<span className={styles.expand}>May - June 2021 <IcArrow /></span>
			</div>
			{
				data
					? <ActivityChart data={data} />
					: <div className={styles.spinner}><Spinner /></div>
			}
		</div>
	);
}
