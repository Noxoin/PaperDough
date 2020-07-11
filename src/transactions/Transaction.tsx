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

	constructor() {
		this.date = new Date();
		this.type = Type.UNKNOWN;
		this.category = "";
		this.account = "";
		this.description = "";
		this.amount = 0.0;
	}
	
	getDate(): Date {
		return this.date;
	}

	getDisplayDate(): string {
		return this.date.toLocaleString();
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
		return '$' + this.amount.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
}

export { Transaction, Type };
