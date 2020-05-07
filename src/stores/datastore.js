import { writable, derived } from "svelte/store";
import { elapsed } from "~/stores/elapsed.js";
import { filterRawData } from "~/modules/table-filtering.js";
import fastsort from "fast-sort";

// Raw data
export const dataRaw = writable([]);

// Specification of table columns
// Column order, sorting information
export const dataColumns = writable([]);

// Disable input when dataRaw is null
export const inputDisabled = derived(dataRaw, d => d == null);

// Dictionary of filter funcs
// { filterName: (item) => { return true; } }
export const dataFilters = writable({});

// Array of columns to sort by, and direction
// [ { column: name, ascending: true } ]
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
export const filteredSorting = derived(([dataFiltered, dataSorting]), data => data);

// Sort dataFiltered array in-place
filteredSorting.subscribe(([data, sorting]) => {
	if (data && data.length > 0) {
		// Create array of params for fastsort
		let fastsortParams = sorting.reduce((result, sort) => {
			result.push(createFastSortParam(sort, data));
			return result;
		}, []);

		// Sort by id last if column exists
		if ("id" in data[0]) {
			fastsortParams.push(createFastSortParam({ column: "id", ascending: true }));
		}

		// In-place sort
		if (fastsortParams.length > 0) fastsort(data).by(fastsortParams);

		// Mark time for debugging
		elapsed.update("Sorted");
	}
});

function createFastSortParam(sort, data) {
	// Sort direction
	let dir = sort.ascending ? "asc" : "desc";

	// Sort function
	let sortfn = sort.func;
	
	// If sortfn was not provided, create one
	if (!sortfn) {
		// Check data type
		let type = data && typeof data[0][sort.column];
		if (type == "string") sortfn = (item) => item[sort.column].toLowerCase();
		else sortfn = (item) => item[sort.column];
	}

	// Return parameter
	return { [dir]: sortfn };
}