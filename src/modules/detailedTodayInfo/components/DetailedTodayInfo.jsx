import InfoItem from "./InfoItem"

const DetailedTodayInfo = () => {


	const data = JSON.parse(localStorage.getItem('cityInfo'))

	const items = [
		{ title: "Thermal sensation", value: `${Math.round(data.list[0].main.feels_like)}°c` },
		{ title: "Probability of rain", value: `${data.list[0].clouds.all}%` },
		{ title: "Wind speed", value: `${Math.round(data.list[0].wind.speed)} km/h` },
		{ title: "Air humidity", value: `${data.list[0].main.humidity}%` },
		{ title: "UV Index", value: "Not available" }
	];

	return (
		<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3 font-bold">
			{items.map((item, index) => (
				<InfoItem
					key={item.title}
					title={item.title}
					value={item.value}
					isLast={index === items.length - 1}
				/>
			))}
		</div>
	)
}

export default DetailedTodayInfo