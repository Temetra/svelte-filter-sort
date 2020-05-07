import fastsort from "fast-sort";
import { elapsed } from "~/stores/elapsed.js";

export const sortFilteredData = ([data, sorting]) => {
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
};

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