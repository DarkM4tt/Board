import IcArrow from '#assets/icons/arrowRight.svg';

import styles from './events.module.scss';

export default function Events () {
	return (
		<div className={styles.events}>
			<div className={styles.header}>
				<span className={styles.title}>Today&apos;s schedule</span>
				<span className={styles.expand}>See All <IcArrow /></span>
			</div>
		</div>
	);
}
