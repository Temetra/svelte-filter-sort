import { elapsed } from "~/stores/elapsed.js";

export const filterRawData = ([data, filters]) => {
	if (data && data.length > 0) {
		// Get array of filters from dictionary
		let filterList = Object.values(filters);
		
		// Create new array of items that past every filter test
		let result = Array.isArray(data) && data.filter(item => {
			// Test the item against each filter in array
			// True means item should be included
			return filterList.reduce((result, func) => result && func(item), true);
		});

		// Mark time for debugging
		elapsed.update("Filtered");

		// Return filtered array
		return result;
	}
};