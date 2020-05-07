import { writable, derived } from "svelte/store";
import { dataFiltered, filteredSorting } from "~/stores/datastore.js";
import * as paging from "~/modules/table-paging.js";

const dataPaging = writable({
	start: 0,
	step: 100,
	limit: 0
});

// Calculate the current page
export const currentPage = derived(dataPaging, page => Math.min(page.limit, page.start / page.step + 1));

// Calculate the final page
export const maximumPage = derived(dataPaging, page => Math.ceil(page.limit / page.step));

// Paging controls
export const pageSize = (step) => paging.setPageSize(step, dataPaging);
export const firstPage = () => paging.setFirstPage(dataPaging);
export const previousPage = () => paging.setPreviousPage(dataPaging);
export const nextPage = () => paging.setNextPage(dataPaging);
export const lastPage = () => paging.setLastPage(dataPaging);

// Update paging when filtered data changes
dataFiltered.subscribe(data => paging.updatePaging(data, dataPaging));

// A single page from the filtered dataset
// Subscribed to filteredSorting to slice after the sort is complete
export const dataFilteredSlice = derived([filteredSorting, dataPaging], paging.createPageSlice);
