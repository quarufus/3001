<script lang="ts">
	import { onMount } from 'svelte';
	import { init, tx, id } from '@instantdb/core';

	const APP_ID = 'e5cbbced-52f2-4815-a726-b7122a1fe4ae';

	interface Item {
		id: string;
		text: string;
		done: boolean;
		createdAt: number;
	}

	type Schema = { items: Item };

	const db = init<Schema>({ appId: APP_ID });

	let error: { message: string };
	let items: Item[] = [];
	let input: string;

	onMount(() => {
		console.log('Ok');
		db.subscribeQuery({ items: {} }, (resp) => {
			if (resp.error) {
				error = resp.error;
				console.log(error);
				return;
			}
			if (resp.data) {
				console.log(resp.data);
				items = resp.data.items;
			}
		});
	});

	function addItem(text: string) {
		db.transact(
			tx.items[id()].update({
				text,
				done: false,
				createdAt: Date.now()
			})
		);
		input = '';
	}
	function deleteItem(item: Item) {
		db.transact(tx.items[item.id].delete());
	}
	function toggleDone(item: Item) {
		db.transact(tx.items[item.id].update({ done: !item.done }));
	}
	function deleteCompleted(items: Item[]) {
		const completed = items.filter((item) => item.done);
		const txs = completed.map((item) => tx.item[item.id].delete());
		db.transact(txs);
	}
	function toggleAllItems(items: Item[]) {
		const newVal = !items.every((item) => item.done);
		db.transact(items.map((item) => tx.item[item.id].update({ done: newVal })));
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if error}
	<h1>Error: {error}</h1>
{:else}
	<input bind:value={input} />
	<button on:click={addItem(input)}>Add</button>
	{#each items as item}
		<div class="item">
			<h3>{item.text}</h3>
			<button class="square" on:click={deleteItem(item)}>X</button>
		</div>
	{/each}
{/if}

<style>
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 30px;
		margin: 20px;
		background-color: rgb(230, 230, 230);
		border-radius: 10px;
	}
	.square {
		width: 50px;
		height: 50px;
	}
</style>
