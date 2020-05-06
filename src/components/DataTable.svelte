<script>
	import DataTableHeader from "~/DataTableHeader.svelte";
	import DataTableBody from "~/DataTableBody.svelte";
</script>

<style type="text/scss">
	table {
		width:100%;
		border-collapse:collapse;
	}
</style>

<table>
	<DataTableHeader />
	<DataTableBody />
</table>
