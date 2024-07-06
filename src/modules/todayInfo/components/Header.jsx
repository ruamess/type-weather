import { NavLink } from "react-router-dom"

const Header = ({ cityName }) => {

	return (
		<div className="gap-3 flex flex-row">
			<NavLink to={"/"} className="bg-gray-600 w-20 h-16 flex items-center justify-center rounded-lg hover:bg-gray-400 active:bg-gray-500 hover:transition-all duration-1000 cursor-pointer">
				<img src="./Logo.svg" />
			</NavLink>
			<div className="bg-gray-600 text-gray-400 w-[100%] h-16 pl-6 pr-6 flex items-center rounded-lg">
				{cityName}
			</div>
		</div>
	)
}

export default Header