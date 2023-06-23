import SummaryCards from '#components/layout/SummaryCards';

import styles from './dashboard.module.scss';

export default function Dashboard () {
	return (
		<div className={styles.dashboard}>
			<SummaryCards />
		</div>
	);
}
