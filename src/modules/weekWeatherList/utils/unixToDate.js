export default function unixToDate(unixTime) {
	const date = new Date(unixTime * 1000);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const day = days[date.getDay()];
	return `${day}`
}