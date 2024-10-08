<script lang="ts">
	export let showAlert;

	let dialog;

	$: if (dialog && showAlert) dialog.showAlert();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showAlert = false)}
	on:click|self={() => dialog.close()}
></dialog>
