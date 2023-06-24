import Activities from '#components/charts/Activities';
import Events from '#components/charts/Events';
import Products from '#components/charts/Products';
import SummaryCards from '#components/layout/SummaryCards';

import styles from './dashboard.module.scss';

export default async function Dashboard () {
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
