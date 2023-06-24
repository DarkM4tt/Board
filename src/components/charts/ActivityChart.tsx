import { ResponsiveBump } from '@nivo/bump';

export default function ActivityChart (props: IActivityChart) {
	const { data } = props;
	return (
		<ResponsiveBump
			data={data}
			colors={{ scheme: 'set1' }}
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
			enableGridX={false}
			pointBorderColor={{ from: 'serie.color' }}
			axisTop={null}
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
			axisRight={null}
			margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
		/>
	);
}

export interface IActivityChart {
	data: {
		id: string;
		data: {
			x: number;
			y: number;
		}[]
	}[];
}
