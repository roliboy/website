<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header />
<h1 class="text-6xl">yeet</h1>
<Footer />

<style lang="postcss">
</style>
