const WelcomeText = () => {


	return (
		<div className="flex flex-col items-center gap-4 ">
			<div className="text-2xl md:text-4xl flex gap-1 duration-1000">

				<span>
					Welcome to
				</span>

				<span className="text-blue-light">
					TypeWeather
				</span>

			</div>
			<span className="text-gray-200 text-sm md:text-lg duration-1000">
				Choose a location to see the weather forecast
			</span>
		</div>
	)
}

export default WelcomeText