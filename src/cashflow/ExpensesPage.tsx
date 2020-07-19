import React from 'react';

import DetailsPage, {CashflowMonth} from './DetailsPage';

interface IProps {}

interface IState {
	data: CashflowMonth[];
}

const tableData: CashflowMonth[] = [
	{
		month: new Date("2020-06-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
	{
		month: new Date("2020-05-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
	{
		month: new Date("2020-04-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
	{
		month: new Date("2020-03-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
	{
		month: new Date("2020-02-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
	{
		month: new Date("2020-01-01"),
		categorySummary: [
			{ name: 'Income', value: 7194.0 },
			{ name: 'Gift', value: 0.0 },
			{ name: 'Interest', value: 0.95 },
			{ name: 'Tax Return', value: 18675.00 },
		],
		total: 12434.56,
	},
]

class ExpensesPage extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			data: [],
		}
	}

	componentDidMount() {
		this.setState({
			data: tableData,
		});
	}

	render() {
		return (
			<DetailsPage id="ExpensesPage" title="Expenses" data={this.state.data} />
		);
	}
}

export default ExpensesPage;
