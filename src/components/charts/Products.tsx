import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import IcArrow from '#assets/icons/arrowDown.svg';
import Spinner from '#components/base/Spinner';

import styles from './products.module.scss';

const ProductChart = dynamic(() => import('./ProductChart'), { ssr: false });
export default function Products () {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('/api/getProducts').then((res) => res.json()).then((data) => setData(data));
	}, []);

	return (
		<div className={styles.products}>
			<div className={styles.header}>
				<span className={styles.title}>Top products</span>
				<span className={styles.expand}>May - June 2021 <IcArrow /></span>
			</div>
			{
				data
					? <ProductChart data={data} />
					: <div className={styles.spinner}><Spinner /></div>
			}
		</div>
	);
}
