<script>
	import { onMount, afterUpdate } from "svelte";
	import { elapsed, dataRaw, dataSorting } from "~/stores/datastore.js";

	// Mark time for debugging
	afterUpdate(() => elapsed.update("Header updated"));

	// Default sorting
	onMount(() => {
		$dataSorting = [{ field: "Rank", ascending: true }];
	});

	// Returns the sort dir of the column found in sorting array
	// Need to pass array to react to updates
	function getSortDir(column, sorting) {
		let entry;
		if (entry = sorting.find(sort => sort.field == column)) {
			return entry.ascending ? "asc" : "desc";
		}
		else {
			return "";
		}
	}

	// Adds, removes or reverses a column sort
	function sortByColumn(event) {
		// Get column name from event source
		let column = event.target.dataset.column;

		// Get existing sort entry
		let entry;
		if (entry = $dataSorting.find(sort => sort.field == column)) {
			// Switch to descending, or flip if entry is only one left
			if (entry.ascending || $dataSorting.length == 1) {
				dataSorting.update(sorting => {
					entry.ascending = !entry.ascending;
					return sorting;
				});
			}
			else {
				// Otherwise delete
				dataSorting.update(sorting => {
					return sorting.filter(item => item !== entry);
				});
			}
		}
		else {
			// Add new sort entry to end of array
			dataSorting.update(sorting => {
				sorting.push({ field: column, ascending: true });
				return sorting;
			});
		}
	}

	// Get column names from first item in dataset
	let columnNames;
	$: columnNames = Object.keys(($dataRaw && $dataRaw.length > 1) ? $dataRaw[0] : {});
</script>

<style type="text/scss">
	th {
		text-align:left;
		padding:0 0 0.25rem 0;
		cursor: pointer;

		&.asc::before {
			content: "⇡ ";
		}

		&.desc::before {
			content: "⇣ ";
		}

		&:nth-child(1) {
			width:5%;
		}

		&:nth-child(2), &:nth-child(3), &:nth-child(4) {
			width:20%;
			overflow:hidden;
			text-overflow: ellipsis;
		}

		&:nth-child(5), &:nth-child(6), &:nth-child(7) {
			width:8.75%;
		}
	}
</style>

<thead>
	<tr on:click={sortByColumn}>
		{#each columnNames as name}
			<th data-column="{name}" class={getSortDir(name, $dataSorting)}>{name}</th>
		{/each}
	</tr>
</thead>
