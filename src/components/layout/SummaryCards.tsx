import { summaryList } from '#data/dashboard';

import styles from './summaryCards.module.scss';

export default function SummaryCards () {
	return (
		<div className={styles.summaryCards}>
			{
				summaryList.map(({ title, value, color, Icon }, i) => (
					<div key={i} className={styles.card} style={{ background: color }}>
						<Icon className={styles.icon} />
						<div className={styles.value}>{value}</div>
						<div className={styles.title}>{title}</div>
					</div>
				))
			}
		</div>
	);
}
