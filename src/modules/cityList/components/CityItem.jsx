import getWeatherInfo from "../api/getWeatherInfo"

const CityItem = ({ city }) => {

	return (
		<button onClick={() => getWeatherInfo(city)}
			className="bg-gray-500 hover:bg-gray-400 active:bg-gray-500 hover:transition-all 
			duration-1000 cursor-pointer h-16 pl-5 pr-5 rounded-lg flex items-center w-80 md:w-[500px]"
		>
			{city}
		</button>
	)

}

export default CityItem