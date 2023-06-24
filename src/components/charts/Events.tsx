import IcArrow from '#assets/icons/arrowRight.svg';

import styles from './events.module.scss';

const events = [
	{
		title: 'Meeting with suppliers from Kuta Bali',
		time: '14.00-15.00',
		location: 'at Sunset Road, Kuta, Bali',
	},
	{
		title: 'Check operation at Giga Factory 1',
		time: '18.00-20.00',
		location: 'at Central Jakarta ',
	},
	{
		title: 'Check operation at Giga Factory 1',
		time: '18.00-20.00',
		location: 'at Central Jakarta ',
	},
];

export default function Events () {
	return (
		<div className={styles.events}>
			<div className={styles.header}>
				<span className={styles.title}>Today&apos;s schedule</span>
				<span className={styles.expand}>See All <IcArrow /></span>
			</div>
			<div className={styles.eventList}>
				{
					events.map((event, index) => (
						<div key={index} className={styles.event}>
							<div className={styles.eventTitle}>{event.title}</div>
							<div className={styles.eventTime}>{event.time}</div>
							<div className={styles.eventLocation}>{event.location}</div>
						</div>
					))
				}
			</div>
		</div>
	);
}
