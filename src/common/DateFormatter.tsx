function formatAsMonth(d: Date) {
	return d.getFullYear() + '-' + (d.getMonth() > 10 ? '': '0') + (d.getMonth() + 1);
}

function formatAsDate(d: Date) {
	let day: string = (d.getDate() > 10 ? '' : '0') + d.getDate();
	let month: string = (d.getMonth() > 10 ? '' : '0') + (d.getMonth() + 1);
	return d.getFullYear() + '-' + month + '-' + day;
}

export {formatAsMonth, formatAsDate};
