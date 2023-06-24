import { ResponsivePie } from '@nivo/pie';

import IcArrow from '#assets/icons/arrowDown.svg';

import styles from './products.module.scss';

export default function Products () {
	return (
		<div className={styles.products}>
			<div className={styles.header}>
				<span className={styles.title}>Top products</span>
				<span className={styles.expand}>May - June 2021 <IcArrow /></span>
			</div>
			<ResponsivePie
				data={data}
				margin={{ top: 30, right: 50, bottom: 30, left: 0 }}
				borderWidth={1}
				borderColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							0.2,
						],
					],
				}}
				enableArcLinkLabels={false}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor='#000000'
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							2,
						],
					],
				}}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: 'ruby',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'c',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'go',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'python',
						},
						id: 'dots',
					},
					{
						match: {
							id: 'scala',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'lisp',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'elixir',
						},
						id: 'lines',
					},
					{
						match: {
							id: 'javascript',
						},
						id: 'lines',
					},
				]}
				legends={[
					{
						anchor: 'right',
						direction: 'column',
						justify: false,
						translateX: 0,
						translateY: 0,
						itemsSpacing: 4,
						itemWidth: 0,
						itemHeight: 18,
						itemTextColor: '#000000',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolSize: 14,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#000',
								},
							},
						],
					},
				]}
			/>
		</div>
	);
}

const data = [
	{
		id: 'ruby',
		label: 'ruby',
		value: 144,
		color: 'hsl(159, 70%, 50%)',
	},
	{
		id: 'elixir',
		label: 'elixir',
		value: 345,
		color: 'hsl(12, 70%, 50%)',
	},
	{
		id: 'php',
		label: 'php',
		value: 327,
		color: 'hsl(201, 70%, 50%)',
	},
	{
		id: 'c',
		label: 'c',
		value: 382,
		color: 'hsl(146, 70%, 50%)',
	},
	{
		id: 'stylus',
		label: 'stylus',
		value: 585,
		color: 'hsl(149, 70%, 50%)',
	},
];
