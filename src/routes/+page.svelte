<script lang="ts">
	import { onMount } from 'svelte';
	import { init, tx, id } from '@instantdb/core';
	import { Trash2 } from 'lucide-svelte';
	import Switch from '$lib/components/Switch.svelte';

	const APP_ID = 'e5cbbced-52f2-4815-a726-b7122a1fe4ae';

	interface Item {
		id: string;
		text: string;
		done: boolean;
		color: string;
		createdAt: number;
	}

	const colors = {
		grey: 'bg-my-grey',
		red: 'bg-my-red',
		green: 'bg-my-green',
		blue: 'bg-my-blue',
		orange: 'bg-my-orange',
		pink: 'bg-my-pink',
		teal: 'bg-my-teal',
	};
	let selectedColor = "my-grey";

	type Schema = { items: Item };

	const db = init<Schema>({ appId: APP_ID });

	let error: { message: string };
	let items: Item[] = [];
	let input: string;
	let expanded = false;
	let container;

	const onFocus = () => expanded = true;
	const onBlur = () => expanded = false;
	function selectColor(color: string) { selectedColor = color; }
	function onWindowClick(e) {if (container.contains(e.target) == false) expanded = false; }

	onMount(() => {
		db.subscribeQuery({ items: {} }, (resp) => {
			if (resp.error) {
				error = resp.error;
				return;
			}
			if (resp.data) {
				items = resp.data.items;
			}
		});
	});

	function addItem(text: string, color: string) {
		db.transact(
			tx.items[id()].update({
				text,
				done: false,
				color,
				createdAt: Date.now()
			})
		);
		input = '';
		selectedColor = '';
	}
	function handleKey(e) {
		if (e.keyCode == 13) {addItem(input, selectedColor); expanded = false;};
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

<svelte:window on:click={onWindowClick} />

<main class="flex flex-col items-center w-screen p-5">
	{#if error}
		<h1>Error: {error}</h1>
	{:else}
		<div class="add-container">
			<div bind:this={container} class="border-2 border-black p-2 rounded-md">
				<div class="flex">
					<input bind:value={input} on:focus={onFocus} on:keydown={handleKey} class="border-2 border-black rounded-md p-2 grow m-5"/>
					<button type="submit" on:click={() => addItem(input, selectedColor)} class="bg-my-orange rounded-md p-2 m-5">Add</button>
				</div>
				<div hidden={!expanded}>
					{#each Object.entries(colors) as [title, color], i}
						<label class="{color} w-10 h-10 relative inline-block m-5 rounded-md">
							{#if i ==0}
							<input id="picker" class="{color} opacity-0 h-0 w-0 peer" on:input={() => selectColor(title)} type="radio" name="colors" value={color} checked/>
							{:else}
							<input id="picker" class="{color} opacity-0 h-0 w-0 peer" on:input={() => selectColor(title)} type="radio" name="colors" value={color}/>
							{/if}
							<span class="w-10 h-10 {color} cursor-pointer absolute rounded-md peer-checked:border-2 peer-checked:border-black"></span>
						</label>
					{/each}
				</div>
			</div>
		</div>
		{#each items as item}
			<div class="flex lg:w-2/3 md:w-4/5 w-full justify-between items-center px-8 py-5 {colors[item.color]} rounded-md my-5">
				<h3>{item.text}</h3>
				<div class="flex items-center gap-4">
					<Switch item={item} toggle={() => toggleDone(item)}/>
					<button class="" on:click={() => deleteItem(item)}><Trash2/></button>
				</div>
			</div>
		{/each}
	{/if}
</main>

<style>
	.add-container {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	input.checked + .slider {
		border: 2px solid black;
	}
</style>
