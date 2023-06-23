import { FC, SVGProps } from 'react';

import { summaryList } from '#data/dashboard';

import styles from './summaryCards.module.scss';

export default function SummaryCards () {
	return (
		<div className={styles.summaryCards}>
			{
				summaryList.map(({ title, value, color, Icon }, i) => (
					<div key={i} className={styles.card} style={{ background: color }}>
						<Icon className={styles.icon} />
						<div className={styles.title}>{title}</div>
						<div className={styles.value}>{value}</div>
					</div>
				))
			}
		</div>
	);
}

interface ICardProps {
	title: string;
	value: string;
	color: string;
	Icon: FC<SVGProps<SVGSVGElement>>;
}
