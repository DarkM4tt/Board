import { useEffect, useState } from 'react';

import IcArrow from '#assets/icons/arrowRight.svg';
import Spinner from '#components/base/Spinner';

import styles from './events.module.scss';

export default function Events () {
	const [data, setData] = useState<IEvent[]>();

	useEffect(() => {
		fetch('/api/getEvents').then((res) => res.json()).then((data) => setData(data));
	}, []);

	return (
		<div className={styles.events}>
			<div className={styles.header}>
				<span className={styles.title}>Today&apos;s schedule</span>
				<span className={styles.expand}>See All <IcArrow /></span>
			</div>
			<div className={styles.eventList}>
				{
					data ?
						data.map((event, index) => (
							<div key={index} className={styles.event}>
								<div className={styles.eventTitle}>{event.title}</div>
								<div className={styles.eventTime}>{event.time}</div>
								<div className={styles.eventLocation}>{event.location}</div>
							</div>
						))
						:
						<div className={styles.spinner}><Spinner /></div>
				}
			</div>
		</div>
	);
}

interface IEvent {
	title: string;
	time: string;
	location: string;
}
