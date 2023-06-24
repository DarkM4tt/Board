import dynamic from 'next/dynamic';

import Events from '#components/charts/Events';
import SummaryCards from '#components/layout/SummaryCards';

import styles from './dashboard.module.scss';

const Activities = dynamic(() => import('#components/charts/Activities'), { ssr: false });
const Products = dynamic(() => import('#components/charts/Products'), { ssr: false });
export default function Dashboard () {
	return (
		<div className={styles.dashboard}>
			<SummaryCards />
			<Activities />
			<div className={styles.productAndEvents}>
				<Products />
				<Events />
			</div>
		</div>
	);
}
