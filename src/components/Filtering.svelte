<script>
	import { dataFilters, inputDisabled } from "~/stores/datastore.js";

	// Update specific filter when form input changes variable
	let filterName = "";
	$: $dataFilters["name"] = (item) => filterName.length == 0 || (item.Name && item.Name.toLowerCase().includes(filterName));

	// Filter by country
	let filterCountry = "";
	$: $dataFilters["country"] = (item) => filterCountry.length == 0 || (item.Country && item.Country.toLowerCase().includes(filterCountry));

	// Filter by category
	let filterCategory = "";
	$: $dataFilters["category"] = (item) => filterCategory.length == 0 || (item.Category && item.Category.toLowerCase().includes(filterCategory));

	// Fixed as >= at the moment
	let filterAssets = 0;
	$: $dataFilters["assets"] = (item) => item.Assets >= filterAssets;
</script>

<style type="text/scss">
	div {
		margin:0 0 0.5rem 0;
	}
	
	label {
		display:inline-block;
		width:150px;
	}
</style>

<section>
	<h2>Filtering</h2>
	<div>
		<label for="filterName">Name contains</label>
		<input id="filterName" type="text" bind:value={filterName} disabled={$inputDisabled} />
	</div>
	<div>
		<label for="filterCountry">Country contains</label>
		<input id="filterCountry" type="text" bind:value={filterCountry} disabled={$inputDisabled} />
	</div>
	<div>
		<label for="filterCategory">Category contains</label>
		<input id="filterCategory" type="text" bind:value={filterCategory} disabled={$inputDisabled} />
	</div>
	<div>
		<label for="filterAssets">Assets >=</label>
		<input id="filterAssets" type="number" bind:value={filterAssets} disabled={$inputDisabled} />
	</div>
</section>
