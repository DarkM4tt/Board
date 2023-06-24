import { ResponsivePie } from '@nivo/pie';

import styles from './products.module.scss';

export default function Products () {
	return (
		<div className={styles.products}>
			<ResponsivePie
				data={data}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
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
				arcLinkLabelsTextColor='#333333'
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
						translateX: -100,
						translateY: 0,
						itemsSpacing: 4,
						itemWidth: 111,
						itemHeight: 18,
						itemTextColor: '#999',
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
