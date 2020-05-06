import { elapsed, dataRaw } from "~/stores/datastore.js";
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

function processData(results) {
	let [fetchedData] = results;

	// Convert Forbes2000 CSV into array of objects
	let data = [];
	let parsed = CSV.parse(fetchedData);
	if (parsed && parsed.length > 0) {
		for (let idx = 1; idx < parsed.length; idx++) {
			data.push({
				Rank: parsed[idx][1],
				Name: parsed[idx][2],
				Country: parsed[idx][3],
				Category: parsed[idx][4],
				Sales: parsed[idx][5],
				Profits: parsed[idx][6],
				Assets: parsed[idx][7],
				"Market value": parsed[idx][8],
			});
		}
	}

	return [data];
}

function updateStores(results) {
	let [data] = results;
	dataRaw.set(data);
	return results;
}

function waitFor(ms, param) {
	return new Promise(resolve => setTimeout(() => resolve(param), ms));
}
