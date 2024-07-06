import Spinner from "./Spinner"
import { action } from 'mobx';
import { useGlobalStore } from "../store";

const SearchInput = () => {
	const searchCity = useGlobalStore((store) => store.searchCity)
	const isSpinnerVisible = useGlobalStore((store) => store.isSpinnerVisible)
	const inputValue = useGlobalStore((store) => store.inputValue)
	const setInputValueInStore = useGlobalStore((store) => store.setInputValue)

	const setInputValue = action((event) => {
		setInputValueInStore(event.target.value)
		if (event.target.value != ' ') {
			searchCity()
		}

	})

	return (
		<div className="flex items-center mt-8 bg-gray-600 h-16 pl-5 pr-5 rounded-lg w-80 md:w-[500px] duration-1000">
			<input className="bg-gray-600 w-full h-16 rounded-lg focus:outline-none"
				type="text" placeholder="Search location"
				value={inputValue}
				onChange={setInputValue} />

			{isSpinnerVisible && <Spinner />}
		</div>
	)
}

export default SearchInput