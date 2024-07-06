import WelcomeText from 'components/WelcomeText'
import SearchInput from 'components/SearchInput'
import { CityList } from 'modules/cityList'
import Logo from 'components/Logo'
import { Toaster } from 'sonner'

const WelcomeScreen = () => {

	return (
		<div className="text-white flex flex-col items-center" >
			<Toaster position="top-center" />
			<Logo />

			<div className="mt-40 flex flex-col items-center w-full">
				<WelcomeText />
				<SearchInput />
				<CityList />

			</div>

		</div >
	)
}

export default WelcomeScreen