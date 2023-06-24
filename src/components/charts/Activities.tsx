import { ResponsiveBump } from '@nivo/bump';

import IcArrow from '#assets/icons/arrowDown.svg';

import styles from './activities.module.scss';

export default function Activities () {
	return (
		<div className={styles.activities}>
			<div className={styles.header}>
				<span className={styles.title}>Activities</span>
				<span className={styles.expand}>May - June 2021 <IcArrow /></span>
			</div>
			<ResponsiveBump
				data={data}
				colors={{ scheme: 'spectral' }}
				lineWidth={3}
				activeLineWidth={6}
				inactiveLineWidth={3}
				inactiveOpacity={0.15}
				pointSize={10}
				activePointSize={16}
				inactivePointSize={0}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={3}
				activePointBorderWidth={3}
				pointBorderColor={{ from: 'serie.color' }}
				axisTop={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: '',
					legendPosition: 'middle',
					legendOffset: -36,
				}}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: '',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'ranking',
					legendPosition: 'middle',
					legendOffset: -40,
				}}
				margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
				axisRight={null}
			/>
		</div>
	);
}

const data = [
	{
		id: 'Serie 1',
		data: [
			{
				x: 2000,
				y: 3,
			},
			{
				x: 2001,
				y: 8,
			},
			{
				x: 2002,
				y: 8,
			},
			{
				x: 2003,
				y: 6,
			},
			{
				x: 2004,
				y: 9,
			},
		],
	},
	{
		id: 'Serie 2',
		data: [
			{
				x: 2000,
				y: 4,
			},
			{
				x: 2001,
				y: 9,
			},
			{
				x: 2002,
				y: 10,
			},
			{
				x: 2003,
				y: 11,
			},
			{
				x: 2004,
				y: 1,
			},
		],
	},
];
