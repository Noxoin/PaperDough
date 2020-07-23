import React from 'react';
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { Header, Container, Segment } from 'semantic-ui-react';

import RevenueComponent from './RevenueComponent';
import ExpenseComponent from './ExpenseComponent';

interface IProps {}

interface IState {
	cashflowLineData: any;
}

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		data: [65, 59, 80, 81, 56, 55, 40],
		fill: false,
		lineTension: 0.1,
	}],
};

let options: ChartOptions = {
      legend: {
        position: 'bottom',
      }
    };

class CashflowPage extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			cashflowLineData: {},
		}
	}

	componentDidMount() {
		this.setState({
			cashflowLineData: data,
		});
	}

	render() {
		return (
			<Container id="CashflowPage">
				<Segment vertical>
					<Header size='huge'>Cashflow</Header>
					<Line data={this.state.cashflowLineData} options={options} height={70}/>
				</Segment>
				<RevenueComponent />
				<ExpenseComponent />
			</Container>
		);
	}
}

export default CashflowPage;
