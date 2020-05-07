<script>
	import { afterUpdate } from "svelte";
	import { elapsed, dataRaw, dataColumns, dataSorting } from "~/stores/datastore.js";

	// Mark time for debugging
	afterUpdate(() => elapsed.update("Header updated"));

	// Copy table-spec columns, adding style attributes
	let columns = [];
	$: {
		columns = $dataColumns.reduce((arr, source) => {
			// Create shallow copy of column
			let column = { ...source };

			// Look for column in sorting array
			let entry = $dataSorting.find(sort => sort.column == column.name);

			// Set style attributes
			if (entry) {
				column.desc = !(column.asc = entry.ascending);
			}
			else {
				column.desc = column.asc = false;
			}

			// Add to array
			arr.push(column);
			return arr;
		}, []);
	}

	function sortByColumn(event) {
		// Get chosen column from event source
		let columnName = event.target.dataset.column;

		// Check if column is already being sorted
		let entry;
		if (entry = $dataSorting.find(sort => sort.column == columnName)) {
			// Flip direction or remove
			dataSorting.update(sorting => {
				if (entry.ascending) entry.ascending = !entry.ascending;
				else sorting = sorting.filter(item => item !== entry);
				return sorting;
			});
		}
		else {
			// Find spec for column
			let column = $dataColumns.find(col => col.name == columnName);

			// Update sorting store
			dataSorting.update(sorting => {
				let newSort = { 
					column: columnName, 
					ascending: true, 
					func: column.sortFunc,
					type: column.sort,
				};
				
				// Add the two nominals to the start of the sort order,
				// in the order they were clicked
				if (column.sort == "nominal") {
					// Copy array and reverse in-place, to find index of last nominal
					let index = sorting.slice()
						.reverse()
						.findIndex(value => value.type == "nominal");
					
					if (index > -1) {
						// Find regular index from the reversed index
						index = sorting.length - index;

						// Splice into array
						sorting.splice(index, 0, newSort);
					}
					else {
						// No other "nominal" sort found, add to start of array
						sorting.unshift(newSort);
					}
				}
				else {
					// Otherwise add to end
					sorting.push(newSort);
				}

				return sorting;
			});
		}
	}
</script>

<style type="text/scss">
	thead {
		th {
			cursor: pointer;
			text-align:left;
			padding:0 0 0.25rem 0;
			width:8.75%;

			&[data-column="Rank"] {
				width:5%;
			}

			&[data-column="Name"],
			&[data-column="Country"], 
			&[data-column="Category"] {
				width:20%;
				overflow:hidden;
				text-overflow: ellipsis;
			}

			&.asc::before {
				content: "⇡ ";
			}

			&.desc::before {
				content: "⇣ ";
			}
		}
	}
</style>

<thead>
	<tr on:click={sortByColumn}>
		{#each columns as column}
			<th data-column={column.name} 
				class:asc={column.asc} class:desc={column.desc}>
				{column.name}
			</th>
		{/each}
	</tr>
</thead>
