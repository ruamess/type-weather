import unixToDate from "../utils/unixToDate"
import WeekWeatherItem from "./WeekWeatherItem"

const WeekWeatherList = () => {

	const data = JSON.parse(localStorage.getItem('cityInfo'))

	return (
		<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-6 font-bold flex flex-row justify-around">
			{data.list.map(el =>
				<WeekWeatherItem key={el.dt}
					temp_max={el.main.temp_max}
					temp_min={el.main.temp_max}
					icon={el.weather[0].icon}
					day={unixToDate(el.dt)} />)}
		</div>
	)
}

export default WeekWeatherList