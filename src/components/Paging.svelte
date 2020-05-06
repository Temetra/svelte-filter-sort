<script>
	import { onMount } from "svelte";
	import { inputDisabled } from "~/stores/datastore.js";
	import { 
		currentPage, 
		maximumPage, 
		pageSize,
		firstPage, 
		previousPage, 
		nextPage, 
		lastPage 
	} from "~/stores/paged-datastore.js";

	onMount(() => pageSize(50));
</script>

<style type="text/scss">
	section {
		margin:0 0 1rem 0;
	}
</style>

<section>
	<h2>Results</h2>
	<span>Page {$currentPage} of {$maximumPage}</span>
	<input type="button" value="First" on:click={firstPage} disabled={$inputDisabled} />
	<input type="button" value="Prev" on:click={previousPage} disabled={$inputDisabled} />
	<input type="button" value="Next" on:click={nextPage} disabled={$inputDisabled} />
	<input type="button" value="Last" on:click={lastPage} disabled={$inputDisabled} />
</section>
