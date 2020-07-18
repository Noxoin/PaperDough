import React from 'react';
import { Header, Loader, Table } from 'semantic-ui-react';
import './TransactionsPage.css';

import { Transaction } from './Transaction';

interface IProps {}

interface IState {
	transactions: Transaction[];
	isLoading: boolean;
}

class TransactionsPage extends React.Component<IProps, IState> {

	constructor(props: IProps) {
    super(props);

    this.state = {
      transactions: [],
			isLoading: true,
    };
  }

	componentDidMount() {
		fetch("/api/transactions")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					transactions: json.transactions.map((t: Transaction) => new Transaction(t)),
					isLoading: false,
				})
			});
	}

	renderHeaders() {
		return (
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Date</Table.HeaderCell>
					<Table.HeaderCell>Rev/Exp</Table.HeaderCell>
					<Table.HeaderCell>Type</Table.HeaderCell>
					<Table.HeaderCell>Account</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell>Amount</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
		);
	}

	renderTransaction(transaction: Transaction, index: number) {
		return (
			<Table.Row key={index}>
				<Table.Cell>{transaction.getDisplayDate()}</Table.Cell>
				<Table.Cell>{transaction.getTypeDisplayName()}</Table.Cell>
				<Table.Cell>{transaction.getCategory()}</Table.Cell>
				<Table.Cell>{transaction.getAccount()}</Table.Cell>
				<Table.Cell>{transaction.getDescription()}</Table.Cell>
				<Table.Cell textAlign="right">{transaction.getDisplayAmount()}</Table.Cell>
			</Table.Row>
		);
	}

	renderLoading() {
		return (
			<Table.Row>
				<Table.Cell colSpan="6">
					<Loader active inline='centered' />
				</Table.Cell>
			</Table.Row>
		);
	}

	render() {
		const {transactions, isLoading} = this.state;
		return (
			<div id="TransactionsPage">
				<Header size='huge'>Transactions</Header>
				<Table className="TransactionsTable">
					{this.renderHeaders()}
					<Table.Body>
						{isLoading ?
							this.renderLoading() :
							transactions.map((t, i) => this.renderTransaction(t, i))}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default TransactionsPage;
