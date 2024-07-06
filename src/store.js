import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import allCities from '../cities.json'

export const useGlobalStore = create(immer((set) => ({
	isSpinnerVisible: false,
	inputValue: '',
	cities: allCities.cities,
	foundCities: [],

	setSpinnerVisible: () => set((state) => {
		state.isSpinnerVisible = !state.isSpinnerVisible;
	}),

	setInputValue: (value) => set((state) => {
		state.inputValue = value;
	}),

	getCurrentFullDate: (offsetInSeconds) => {
		return new Intl.DateTimeFormat('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: '2-digit',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
			timeZone: 'UTC'
		}).format(new Date(Date.now() + offsetInSeconds * 1000));
	},

	searchCity: () => set((state) => {
		const inputValue = state.inputValue.toLowerCase();
		const foundCities = inputValue === ''
			? []
			: Array.from(new Set(state.cities.filter((city) =>
				city.toLowerCase().includes(inputValue)
			)));
		return { ...state, foundCities };
	}),

})));
