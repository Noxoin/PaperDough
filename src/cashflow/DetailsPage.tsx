import React from 'react';
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { Header, Container, Table } from 'semantic-ui-react';

import CategorySummary from './CategorySummary';
import {formatAsCurrency} from '../common/CurrencyFormatter';
import {formatAsMonth} from '../common/DateFormatter';

interface IProps {
	id: string;
	title: string;
	data: CashflowMonth[];
}

interface IState {}

let options: ChartOptions = {
	legend: {
		position: 'bottom',
	}
};

class CashflowMonth {
	month: Date = new Date();
	categorySummary: CategorySummary[] = []
	total: number = 0.0;
}

interface TableRow {
	[key: string]: string[];
}

class DetailsPage extends React.Component<IProps, IState> {

	convertToLineData(cashflowMonth: CashflowMonth[]): any {
		const labels: string[] = [];
		const data: number[] = [];
		const sorted: CashflowMonth[] = cashflowMonth.sort((a, b) => {
			const aMonth: number = a.month.valueOf();
			const bMonth: number = b.month.valueOf();
			return (+(aMonth > bMonth) - (+(aMonth < bMonth)));
		});
		sorted.forEach((m) => {
			labels.push(formatAsMonth(m.month));
			data.push(m.total);
		});
		return {
			labels: labels,
			datasets: [{
				data: data,
				fill: false,
				lineTension: 0.1,
			}],
		};
	}

	renderRevenuesTableHeader(months: string[]) {
		return (
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Category</Table.HeaderCell>
					{months.map((m) => <Table.HeaderCell key={m} collapsing>{m}</Table.HeaderCell>)}
				</Table.Row>
			</Table.Header>
		);
	}

	renderRevenuesTableRows(data: TableRow) {
		let sortedKeys = Object.keys(data).sort();
		return (
			<Table.Body>
				{sortedKeys.map((k) => {
					return (
						<Table.Row key={k}>
							<Table.Cell>{k}</Table.Cell>
							{data[k].map((d, i) => <Table.Cell key={i} collapsing textAlign='right'>{d}</Table.Cell>)}
						</Table.Row>
					);
				})}
			</Table.Body>
		);
	}

	renderRevenuesTable(data: CashflowMonth[]) {
		const months: string[] = data.map((d) => formatAsMonth(d.month));
		let categoryMap: TableRow = {}
		data.forEach((d) => {
			d.categorySummary.forEach((c) => {
				if (!categoryMap.hasOwnProperty(c.name)) {
					categoryMap[c.name] = [];
				}
				categoryMap[c.name].push(formatAsCurrency(c.value));
			});
		});
		return (
			<Table>
				{this.renderRevenuesTableHeader(months)}
				{this.renderRevenuesTableRows(categoryMap)}
			</Table>
		);
	}

	render() {
		return (
			<Container id="{this.props.id}">
				<Header size='huge'>{this.props.title}</Header>
				<Line data={this.convertToLineData(this.props.data)} options={options} height={70}/>
				{this.renderRevenuesTable(this.props.data)}
			</Container>
		);
	}
}

export {CashflowMonth};
export default DetailsPage;
