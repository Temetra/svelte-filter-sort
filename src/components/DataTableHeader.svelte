<script>
	import { onMount, afterUpdate } from "svelte";
	import { elapsed, dataRaw, dataSorting } from "~/stores/datastore.js";

	// Mark time for debugging
	afterUpdate(() => elapsed.update("Header updated"));

	// Set sorting one time
	onMount(() => {
		$dataSorting = [
			{ field: "Rank", ascending: true },
		];
	});

	// Get column names from first item in dataset
	let columnNames;
	$: columnNames = Object.keys(($dataRaw && $dataRaw.length > 1) ? $dataRaw[0] : {});
</script>

<style type="text/scss">
	th {
		text-align:left;
		padding:0 0 0.25rem 0;
	}
</style>

<thead>
	<tr>
		{#each columnNames as name}
			<th>{name}</th>
		{/each}
	</tr>
</thead>
