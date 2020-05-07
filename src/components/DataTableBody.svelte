<script>
	import { afterUpdate } from "svelte";
	import { elapsed, dataColumns } from "~/stores/datastore.js";
	import { dataFilteredSlice } from "~/stores/paged-datastore.js";

	// Mark time for debugging
	afterUpdate(() => elapsed.update("Table updated"));
</script>

<style type="text/scss">
	tr:hover {
		background-color:#eeeeee;
	}

	td {
		padding:0.125rem 2rem 0.125rem 0;
	}
</style>

<tbody>
	{#each $dataFilteredSlice || [] as item (item.Rank)}
		<tr>
			{#each $dataColumns as column}
				<td>{item[column.name]}</td>
			{/each}
		</tr>
	{/each}
</tbody>
