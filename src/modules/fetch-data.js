import { elapsed, dataRaw, dataColumns } from "~/stores/datastore.js";
import CSV from "csv.js";

export async function fetchData() {
	let resetTask = resetStores()
		.then(() => elapsed.update("Store reset complete"));

	let fetchTask = fetch("./Forbes2000.csv")
		// .then(results => waitFor(500, results)) // simulate network
		.then(checkResponse)
		.then(response => response.text())
		.then(data => elapsed.update("Loaded") || data);

	return Promise.all([fetchTask, resetTask])
		.then(results => elapsed.update("Tasks ready") || results)
		.then(processData)
		.then(results => elapsed.update("Processed") || results)
		.then(updateStores)
		.then(results => elapsed.update("Store update complete") || results)
		.catch(err => console.error(err));
}

function resetStores() {
	return new Promise(resolve => {
		elapsed.reset();
		dataRaw.set();
		resolve();
	});
}

function checkResponse(response) {
	if (!response.ok) throw { message:response.statusText, status:response.status };
	else return response;
}

// Profits column is sometimes a string
function numericalSortFunc(column) {
	return (item) => {
		let value = item[column];
		if (typeof value == "string") return parseFloat(value) || Number.NEGATIVE_INFINITY;
		else return value; 
	};
}

function processData(results) {
	// Get fetched data from array of promise results
	let [fetchedData] = results;

	// Create table spec
	let columns = [
		{ name: "Rank", sort: "ordinal", index: 1 },
		{ name: "Name", sort: "ordinal", index: 2 },
		{ name: "Country", sort: "nominal", index: 3 },
		{ name: "Category", sort: "nominal", index: 4 },
		{ name: "Sales", sort: "continuous", index: 5 },
		{ name: "Profits", sort: "continuous", index: 6, sortFunc: numericalSortFunc("Profits") },
		{ name: "Assets", sort: "continuous", index: 7 },
		{ name: "Market value", sort: "continuous", index: 8 },
	];

	// Parse Forbes2000 CSV
	let parsed = CSV.parse(fetchedData);

	// Create array of objects from CSV
	let data = [];
	if (parsed && parsed.length > 0) {
		for (let idx = 1; idx < parsed.length; idx++) {
			// Create object with id as first property
			let item = { id: idx };
			
			// Iterate over table spec
			for (let column of columns) {
				// Set object property to CSV value
				item[column.name] = parsed[idx][column.index];
			}
			
			// Add to data array
			data.push(item);
		}
	}

	return [data, columns];
}

function updateStores(results) {
	let [data, columns] = results;
	dataRaw.set(data);
	dataColumns.set(columns);
	return results;
}

function waitFor(ms, param) {
	return new Promise(resolve => setTimeout(() => resolve(param), ms));
}
