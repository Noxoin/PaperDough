import React from 'react';
import { Dropdown, Grid, Input } from 'semantic-ui-react';

const accountOptions = [
	{ key: 'TD Checking', value: 'TD Checking', text: 'TD Checking'},
	{ key: 'TD Savings', value: 'TD Savings', text: 'TD Savings'},
	{ key: 'TD Visa', value: 'TD Visa', text: 'TD Visa'},
];

const revExp = [
	{ key: 'Revenue', value: 'Revenue', text: 'Revenue'},
	{ key: 'Expense', value: 'Expense', text: 'Expense'},
];

const typeOptions = [
	{ key: 'Restaurants', value: 'Restaurants', text: 'Restaurants'},
	{ key: 'Income', value: 'Income', text: 'Income'},
]

interface IProps {
	hideFilters: boolean;
}

interface IState {
	hideFilters: boolean;
}

class FilterComponent extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			hideFilters: props.hideFilters
		};
	}

	render() {
		if (this.props.hideFilters) {
			return (<Grid></Grid>);
		}
		return (
			<Grid columns='equal' color='grey'>
				<Grid.Row>
					<Grid.Column>
						<Dropdown placeholder='Account' fluid clearable selection options={accountOptions} />
					</Grid.Column>
					<Grid.Column>
						<Dropdown placeholder='Rev/Exp' fluid clearable selection options={revExp} />
					</Grid.Column>
					<Grid.Column>
						<Dropdown placeholder='Type' fluid clearable selection options={typeOptions} />
					</Grid.Column>
					<Grid.Column>
						<Input placeholder='Description' fluid />
					</Grid.Column>
					<Grid.Column>
						<Input label={{ basic: true, content: '$'}}
									 labelPosition='left'
					 				 placeholder='Amount'
									 fluid />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default FilterComponent;