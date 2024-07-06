import CityItem from "./CityItem"
import { useGlobalStore } from "src/store"

const CityList = () => {

	const foundCities = useGlobalStore((state) => state.foundCities)

	return (
		<div className="mt-2 flex flex-col items-center gap-2">
			{foundCities.slice(0, 4).map(el => <CityItem key={el} city={el} />)}
		</div>
	)
}

export default CityList