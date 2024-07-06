import { useGlobalStore } from 'src/store'
import Header from './Header'

const TodayInfo = () => {
	const getCurrentFullDate = useGlobalStore((store) => store.getCurrentFullDate)
	const data = JSON.parse(localStorage.getItem('cityInfo'))
	let fullDate = getCurrentFullDate(data.city.timezone)
	let currentDate = fullDate.slice(0, fullDate.lastIndexOf('at'))
	let currentTime = fullDate.split(' ').reverse()[0].slice(0, 5)

	return (

		<div className="w-full md:max-w-screen-sm bg-gray-800 rounded-lg p-3">

			<Header cityName={data.city.name} />

			<div className="w-full h-[330px] rounded-lg mt-3 p-6 flex flex-col justify-between"
				style={{
					backgroundImage: `url(./background/${data.list[0].weather[0].icon}.svg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}>
				<div>
					<div className="flex justify-between">
						<span className="text-lg font-bold tracking-wide">
							{data.city.name}
						</span>
						<span className="font-bold" >
							{currentTime}
						</span>
					</div>
					<div className="text-s">
						{currentDate}
					</div>
				</div>

				<div className="flex flex-row justify-between">
					<div className="flex flex-col justify-end">
						<span className="text-5xl font-bold mb-4">
							{Math.round(data.list[0].main.temp)}°c
						</span>
						<span className="font-bold">
							{Math.round(data.list[0].main.temp_max)}°c / {Math.round(data.list[0].main.temp_min)}°c</span>
						<span className=" text-sm">{data.list[0].weather[0].main}</span>
					</div>

					<div >
						<img src={`./weather/${data.list[0].weather[0].icon}.svg`} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TodayInfo