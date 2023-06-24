import { ResponsivePie } from '@nivo/pie';

export default function ActivityChart (props: IProductChart) {
	const { data } = props;
	return (
		<ResponsivePie
			data={data}
			margin={{ top: 30, right: 80, bottom: 30, left: 0 }}
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
			fill={fillRule}
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
	);
}
const fillRule = [
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
];
export interface IProductChart {
	data: {
		id: string,
		label: string,
		value: number,
		color: string,
	}[];
}
