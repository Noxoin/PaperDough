import { Server } from 'miragejs';

import { Transaction, Type } from '../transactions/Transaction';

function LocalApiTransactions(server: Server) {
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

	server.get("/api/transactions", () => ({
		transactions: [t1, t2],
	}), {timing: 1000});
}

export { LocalApiTransactions };
