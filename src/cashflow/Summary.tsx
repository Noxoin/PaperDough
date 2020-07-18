import React from 'react';
import { ChartOptions} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Header, Grid, Segment, Statistic, Table } from 'semantic-ui-react';

const options: ChartOptions = {
	layout: {
		padding: 48,
	},
	legend: {
		display: false,
	}
};

// TODO: Update colours for DoughNut chart.
const chartColours: string[] = [
	'#FF6384',
	'#36A2EB',
	'#FFCE56',
	'#D3212D',
	'#7CB9E8',
	'#0048BA',
	'#B0BF1A',
	'#BFFF00',
	'#064E40',
	'#FFAA1D',
];

interface IProps {
	name: string;
	value: string;
	data: CategorySummary[];
}

interface IState {}

class CategorySummary {
	name: string = '';
	value: number = 0.0;
}

class Summary extends React.Component<IProps, IState> {
	getChartData(data: CategorySummary[]): any {
		let labels: string[] = [];
		let chartData: number[] = [];
		data.forEach((d: CategorySummary) => {
			labels.push(d.name);
			chartData.push(d.value);
		});
		return {
			labels: labels,
			datasets: [{ data: chartData, backgroundColor: chartColours, hoverBackgroundColor: chartColours}],
		};
	}

	renderSummaryRow(data: CategorySummary) {
		return (
			<Table.Row>
				<Table.Cell>{data.name}</Table.Cell>
				<Table.Cell textAlign="right">$ {data.value}</Table.Cell>
			</Table.Row>
		);
	}

	renderSummaryTable(data: CategorySummary[]) {
		return (
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell textAlign="right">Amount</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{data.map((d) => this.renderSummaryRow(d))}
				</Table.Body>
			</Table>
		);
	}

	render() {
		return (
			<Segment vertical>
				<Header size='large'>{this.props.name}</Header>
				<Statistic size='mini'>
					<Statistic.Value>{this.props.value}</Statistic.Value>
				</Statistic>
				<Grid stackable>
					<Grid.Column width={6}>
						<Doughnut data={this.getChartData(this.props.data)} options={options} width={64} height={64} />
					</Grid.Column>
					<Grid.Column width={10}>
						{this.renderSummaryTable(this.props.data)}
					</Grid.Column>
				</Grid>
			</Segment>
		);
	}
}

export {CategorySummary};
export default Summary;
