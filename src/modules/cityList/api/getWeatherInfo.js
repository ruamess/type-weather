import config from '../../../../env.json'
import { useGlobalStore } from '../../../store';
import toast from 'react-hot-toast';

function Make5Days(arr) {
	const uniqueValues = [arr[0]]

	for (let i = 1; i < arr.length; i++) {
		const currentDate = arr[i].dt_txt.split(' ')[0];
		const prevDate = arr[i - 1].dt_txt.split(' ')[0];
		if (currentDate !== prevDate) {
			uniqueValues.push(arr[i]);
		}
	}

	return uniqueValues
}

export default function getWeatherInfo(city) {
	localStorage.clear()
	useGlobalStore.getState().inputValue = city
	useGlobalStore.getState().setSpinnerVisible()
	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}&cnt=30&units=metric`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			let dataList = data
			dataList.list = Make5Days(dataList.list)
			localStorage.setItem('cityInfo', JSON.stringify(dataList))
			useGlobalStore.getState().setSpinnerVisible()
			window.location.href = '/weather';
			useGlobalStore.getState().foundCities = []
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error);
			toast.error('City is not found')
			useGlobalStore.getState().setSpinnerVisible()
		})
}