import {formatAsCurrency} from '../common/CurrencyFormatter';
import {formatAsDate} from '../common/DateFormatter';

enum Type {
	UNKNOWN,
	REVENUE,
	EXPENSE,
}

const TypeToDisplayString = new Map<number, string> ([
	[Type.UNKNOWN, 'N/A'],
	[Type.REVENUE, 'Rev'],
	[Type.EXPENSE, 'Exp'],
]);

class Transaction {
	date: Date;
	type: Type;
	category: string;
	account: string;
	description: string;
	amount: number;

	constructor({
			date = new Date(),
			type = Type.UNKNOWN,
			category = "",
			account = "",
			description = "",
			amount = 0.0,
		} = {}) {
		this.date = new Date(date);
		this.type = type;
		this.category = category;
		this.account = account;
		this.description = description;
		this.amount = amount;
	}
	
	getDate(): Date {
		return this.date;
	}

	getDisplayDate(): string {
		return formatAsDate(this.date);
	}

	getType(): Type {
		return this.type;
	}

	getTypeDisplayName(): string{
		return TypeToDisplayString.get(this.type) || 'N/A';
	}

	getCategory(): string {
		return this.category;
	}

	getAccount(): string {
		return this.account;
	}

	getDescription(): string {
		return this.description;
	}

	getAmount(): number {
		return this.amount;
	}

	getDisplayAmount(): string {
		return formatAsCurrency(this.amount);
	}
}

export { Transaction, Type };
