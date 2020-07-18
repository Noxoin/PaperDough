import React from 'react';

import Summary, {CategorySummary} from './Summary';

const data: CategorySummary[] = [
  { name: 'Income', value: 22 },
  { name: 'Gift', value: 29 },
  { name: 'Interest', value: 51 },
  { name: 'Loan', value: 78 },
];

class RevenueComponent extends React.Component {
	render() {
		return (
			<Summary name="Revenue" value="CAD$ 12,345.00" data={data} />
		);
	}
}

export default RevenueComponent;
