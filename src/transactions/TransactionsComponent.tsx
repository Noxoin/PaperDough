import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import './TransactionsComponent.css';

import { Transaction, Type } from './Transaction';

class TransactionsComponent extends React.Component {

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

	render() {
		const t1 = new Transaction();
		t1.date = new Date("2020-07-10");
		t1.type = Type.EXPENSE;
		t1.category = "Restaurants";
		t1.account = "TD Visa Infinite";
		t1.description = "Timothy's Coffee";
		t1.amount = 5.19;

		const t2 = new Transaction();
		t2.date = new Date("2020-07-10");
		t2.type = Type.REVENUE;
		t2.category = "Income";
		t2.account = "TD All-Inclusive Bank";
		t2.description = "Google Pay";
		t2.amount = 3318.91;

		const transactions: Transaction[] = [t1, t2];

		return (
			<div id="TransactionsComponent">
				<Header size='huge'>Transactions</Header>
				<Table className="TransactionsTable">
					{this.renderHeaders()}
					<Table.Body>
						{transactions.map((t, i) => this.renderTransaction(t, i))}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default TransactionsComponent;
