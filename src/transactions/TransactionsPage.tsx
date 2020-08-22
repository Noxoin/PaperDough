import React from 'react';
import { Button, Container, Header, Icon, Loader, Table } from 'semantic-ui-react';
import './TransactionsPage.css';

import { Transaction } from './Transaction';
import FilterComponent from './FilterComponent';

interface IProps {}

interface IState {
	transactions: Transaction[];
	isLoading: boolean;
	hideFilters: boolean;
}

class TransactionsPage extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);

		this.state = {
			transactions: [],
			isLoading: true,
			hideFilters: true,
		};
  }

	componentDidMount() {
		fetch('/api/transactions')
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
					<Table.HeaderCell collapsing>Date</Table.HeaderCell>
					<Table.HeaderCell collapsing>Rev/Exp</Table.HeaderCell>
					<Table.HeaderCell collapsing>Type</Table.HeaderCell>
					<Table.HeaderCell collapsing>Account</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell collapsing textAlign='right'>Amount</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
		);
	}

	renderTransaction(transaction: Transaction, index: number) {
		return (
			<Table.Row key={index}>
				<Table.Cell collapsing>{transaction.getDisplayDate()}</Table.Cell>
				<Table.Cell collapsing>{transaction.getTypeDisplayName()}</Table.Cell>
				<Table.Cell collapsing>{transaction.getCategory()}</Table.Cell>
				<Table.Cell collapsing>{transaction.getAccount()}</Table.Cell>
				<Table.Cell>{transaction.getDescription()}</Table.Cell>
				<Table.Cell collapsing textAlign='right'>{transaction.getDisplayAmount()}</Table.Cell>
			</Table.Row>
		);
	}

	renderLoading() {
		return (
			<Table.Row>
				<Table.Cell colSpan='6'>
					<Loader active inline='centered' />
				</Table.Cell>
			</Table.Row>
		);
	}

	toggleFilters() {
		this.setState((prevState) => ({ hideFilters: !prevState.hideFilters}));
	}

	render() {
		const {transactions, isLoading, hideFilters} = this.state;
		return (
			<Container id='TransactionsPage'>
				<div className='action_buttons'>
					<Button floated='right' animated 
									onClick={(e) => this.toggleFilters()}
									active={!hideFilters}>
						<Button.Content visible>
							<Icon name='filter' />
						</Button.Content>
						<Button.Content hidden>Filter</Button.Content>
					</Button>
				</div>
				<Header size='huge'>Transactions</Header>
				<FilterComponent hideFilters={hideFilters}/>
				<Table className='TransactionsTable'>
					{this.renderHeaders()}
					<Table.Body>
						{isLoading ?
							this.renderLoading() :
							transactions.map((t, i) => this.renderTransaction(t, i))}
					</Table.Body>
				</Table>
			</Container>
		);
	}
}

export default TransactionsPage;
