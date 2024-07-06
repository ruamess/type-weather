import { TodayInfo } from "modules/todayInfo"
import { WeekWeatherList } from "modules/weekWeatherList"
import { DetailedTodayInfo } from "modules/detailedTodayInfo"


const WeatherScreen = () => {



	console.log(JSON.parse(localStorage.getItem('cityInfo')))
	return (
		<div className="p-2 gap-2 flex flex-col items-center w-screen text-gray-100">
			<TodayInfo />
			<DetailedTodayInfo />
			<WeekWeatherList />
		</div >
	)
}

export default WeatherScreen