<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		// const res = await fetch('/todos.json');
		const todos = ['1', '2'];

		return {
			props: { todos }
		};
	};
</script>

<script lang="ts">
	export let todos: string[];
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<div class="content">
	<h1>Todos</h1>
	{#each todos as todo}
		{todo}
	{/each}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
