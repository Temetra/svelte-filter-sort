import { elapsed } from "~/stores/elapsed.js";

// Set the page size
export const setPageSize = (step, dataPaging) => {
	elapsed.reset(); 
	
	dataPaging.update(p => {
		return { ...p, start: 0, step };
	}); 
};

// Move to the first page
export const setFirstPage = (dataPaging) => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		return { ...p, start: 0 };
	}); 
};

// Move to previous or first page
export const setPreviousPage = (dataPaging) => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = Math.max(p.start - p.step, 0);
		return { ...p, start };
	}); 
};

// Move to next or last page
export const setNextPage = (dataPaging) => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = Math.max(p.start, (p.start + p.step) % p.limit);
		return { ...p, start };
	}); 
}

// Move to last page
export const setLastPage = (dataPaging) => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = p.start = (Math.ceil(p.limit / p.step) - 1) * p.step;
		return { ...p, start };
	}); 
}

// Update paging when filtered data changes
export const updatePaging = (data, dataPaging) => {
	if (data && data.length > 0) {
		// Reset paging parameters
		dataPaging.update(page => ({ ...page, start: 0, limit: data.length }));
		
		// Mark time for debugging
		elapsed.update("Paging");
	}
	else {
		// No pages when data is empty
		dataPaging.update(page => ({ ...page, start: 0, limit: 0 }));
	}
};

// A single page from the filtered dataset
// Subscribed to filteredSorting to slice after the sort is complete
export const createPageSlice = ([[data, sorting], page]) => {
	if (data && data.length > 0) {
		// Slice filtered array
		let result = data.slice(page.start, page.start + page.step);
		
		// Mark time for debugging
		elapsed.update("Sliced");
		
		// Return sliced array
		return result;
	}
};