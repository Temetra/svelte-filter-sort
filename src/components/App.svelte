<script>
	import { onMount } from "svelte";
	import { fetchData } from "~/modules/fetch-data.js";
	import { elapsed } from "~/stores/datastore.js";

	import Description from "~/Description.svelte";
	import Filtering from "~/Filtering.svelte";
	import Paging from "~/Paging.svelte";
	import DataTable from "~/DataTable.svelte";

	// Dump elapsed time to console
	elapsed.subscribe(time => console.log(time));

	// Load data when app is mounted
	onMount(() => fetchData());
</script>

<style type="text/scss">
</style>

<Description />
<Filtering />
<Paging />
<DataTable />
