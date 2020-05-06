import { writable, derived } from "svelte/store";
import { elapsed, dataFiltered } from "./datastore.js";

const dataPaging = writable({
	start: 0,
	step: 100,
	limit: 0
});

// Calculate the current page
export const currentPage = derived(dataPaging, page => Math.min(page.limit, page.start / page.step + 1));

// Calculate the final page
export const maximumPage = derived(dataPaging, page => Math.ceil(page.limit / page.step));

// Set the page size
export const pageSize = (step) => {
	elapsed.reset(); 
	
	dataPaging.update(p => {
		return { ...p, start: 0, step };
	}); 
};

// Move to the first page
export const firstPage = () => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		return { ...p, start: 0 };
	}); 
}

// Move to previous or first page
export const previousPage = () => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = Math.max(p.start - p.step, 0);
		return { ...p, start };
	}); 
}

// Move to next or last page
export const nextPage = () => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = Math.max(p.start, (p.start + p.step) % p.limit);
		return { ...p, start };
	}); 
}

// Move to last page
export const lastPage = () => { 
	elapsed.reset(); 
	
	dataPaging.update(p => {
		let start = p.start = (Math.ceil(p.limit / p.step) - 1) * p.step;
		return { ...p, start };
	}); 
}

// Update paging when filtered data changes
dataFiltered.subscribe(data => {
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
});

// A single page from the filtered dataset
export const dataFilteredSlice = derived([dataFiltered, dataPaging], ([data, page]) => {
	if (data && data.length > 0) {
		// Slice filtered array
		let result = data.slice(page.start, page.start + page.step);
		
		// Mark time for debugging
		elapsed.update("Sliced");
		
		// Return sliced array
		return result;
	}
});
