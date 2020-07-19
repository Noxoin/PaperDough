import React from 'react';

import Summary, {CategorySummary} from './Summary';

const data: CategorySummary[] = [
  { name: 'Rent', value: 22 },
  { name: 'Restaurants', value: 29 },
  { name: 'Entertainment', value: 51 },
  { name: 'Transportation', value: 78 },
  { name: 'Groceries', value: 78 },
  { name: 'Interest', value: 78 },
  { name: 'Vacation', value: 78 },
  { name: 'Essentials', value: 78 },
];

class ExpenseComponent extends React.Component {
	render() {
		return (
			<Summary name="Expense" value="CAD$ 12,345.00" sectionLink="/cashflow/expenses" data={data} />
		);
	}
}

export default ExpenseComponent;
