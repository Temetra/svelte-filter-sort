import { writable, derived } from "svelte/store";
import { elapsed } from "~/stores/elapsed.js";
import { filterRawData } from "~/modules/table-filtering.js";
import { sortFilteredData } from "~/modules/table-sorting.js";

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
// [ { column: name, ascending: true, func?: (row) => value } ]
export const dataSorting = writable([]);

// Reset stopwatch when filters and sorting change
dataFilters.subscribe(_ => elapsed.reset());
dataSorting.subscribe(_ => elapsed.reset());

// Filtered data
export const dataFiltered = derived([dataRaw, dataFilters], filterRawData);

// Derived store to support sorting on change
export const filteredSorting = derived(([dataFiltered, dataSorting]), data => data);

// Sort dataFiltered array in-place
filteredSorting.subscribe(sortFilteredData);
