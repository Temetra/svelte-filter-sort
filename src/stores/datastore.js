import { writable, derived } from "svelte/store";
import { stopwatch } from "~/modules/stopwatch.js";
import fastsort from "fast-sort";

// Custom store to roughly measure time taken to show table
export const elapsed = stopwatch();

// Raw data
export const dataRaw = writable([]);

// Disable input when dataRaw is null
export const inputDisabled = derived(dataRaw, d => d == null);

// Dictionary of filter funcs
// { filterName: (item) => { return true; } }
export const dataFilters = writable({});

// Array of columns to sort by, and direction
// [{ field: "FieldName", ascending: true }]
export const dataSorting = writable([]);

// Reset stopwatch when filters and sorting change
dataFilters.subscribe(_ => elapsed.reset());
dataSorting.subscribe(_ => elapsed.reset());

// Filtered data
export const dataFiltered = derived([dataRaw, dataFilters], ([data, filters]) => {
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
});

// Derived store to support sorting on change
const filteredSorting = derived(([dataFiltered, dataSorting]), data => data);

// Sort dataFiltered array in-place
filteredSorting.subscribe(([data, sorting]) => {
	if (data && data.length > 0) {
		// Create array of params for fastsort
		let fastsortParams = sorting.reduce((result, sort) => {
			// Sort direction
			let dir = sort.ascending ? "asc" : "desc";

			// Get sort field type
			let type = typeof data[0][sort.field];

			// Use lower-case string sort, or just the value of the sorting field
			let sortfn;
			if (sort.func) sortfn = sort.func;
			else if (type == "string") sortfn = item => item[sort.field].toLowerCase();
			else sortfn = item => item[sort.field];

			// Add to params
			result.push({ [dir]: sortfn });

			// Return updated array for next iteration
			return result;
		}, []);

		// In-place sort
		if (fastsortParams.length > 0) fastsort(data).by(fastsortParams);

		// Mark time for debugging
		elapsed.update("Sorted");
	}
});
