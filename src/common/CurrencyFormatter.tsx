function formatAsCurrency(n: number): string {
	return '$' + n.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export {formatAsCurrency};
