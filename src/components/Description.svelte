<script>
	import { fetchData } from "~/modules/fetch-data.js";
	import { dataRaw, dataFiltered, inputDisabled } from "~/stores/datastore.js";
	import { dataFilteredSlice } from "~/stores/paged-datastore.js";
</script>

<style type="text/scss">
	section>div {
		margin:0.5rem 0;
	}
</style>

<section>
	<h1>The Forbes 2000 Ranking of the World's Biggest Companies (Year 2004)</h1>
	<div>
		Source: <a href="http://www.forbes.com">www.forbes.com</a>, assessed on November 26th, 2004.
	</div>
	<div>
		Dataset: <a href="https://github.com/vincentarelbundock/Rdatasets/blob/master/doc/HSAUR/Forbes2000.html">github.com/vincentarelbundock/Rdatasets</a>.
	</div>
	<div>
		Showing {$dataFilteredSlice ? $dataFilteredSlice.length : 0} 
		of {$dataFiltered ? $dataFiltered.length : 0} records 
		({Array.isArray($dataRaw) ? $dataRaw.length : 0} total)
		<input type="button" value="Reload data" on:click={fetchData} disabled={$inputDisabled} />
	</div>
</section>
