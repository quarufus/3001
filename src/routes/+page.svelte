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
	function handleKey(e) {
		if (e.keyCode == 13) addItem(input);
	}
	function deleteItem(item: Item) {
		let result = confirm('Sure you want to delete?');
		if (result) db.transact(tx.items[item.id].delete());
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

<main>
	{#if error}
		<h1>Error: {error}</h1>
	{:else}
		<div class="add-container">
			<div class="add">
				<input bind:value={input} on:keydown={handleKey} />
				<button type="submit" on:click={() => addItem(input)}>Add</button>
			</div>
		</div>
		{#each items as item}
			<div class="item">
				<h3>{item.text}</h3>
				<div>
					<input type="checkbox" checked={item.done} on:change={() => toggleDone(item)} />
					<button class="square" on:click={() => deleteItem(item)}>X</button>
				</div>
			</div>
		{/each}
	{/if}
</main>

<style>
	main {
		width: calc(100% - 60px);
		height: calc(100% - 60px);
		padding: 30px;
	}
	.add-container {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.add {
		padding: 10px 30px;
		background-color: rgb(220, 230, 220);
		border-radius: 10px;
	}
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 30px;
		margin: 20px 0;
		background-color: rgb(230, 230, 230);
		border-radius: 10px;
	}
	.square {
		width: 50px;
		height: 50px;
	}
</style>
